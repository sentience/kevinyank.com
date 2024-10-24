import fetch from "node-fetch";
const { schedule } = require("@netlify/functions");
const { IncomingWebhook } = require("@slack/webhook");
const Redis = require("ioredis");
const Push = require("pushover-notifications");
const { isDeepStrictEqual } = require("util");

// https://crontab.guru/#*_1-7_*_*_THU (UTC) = 9PM WED – 3AM THU (US EST)
export const handler = schedule("* 1-7 * * THU", handlerImpl);

async function handlerImpl(event, context) {
  await Promise.all(SHOWS.map(processShow));

  return {
    statusCode: 200,
  };
}

async function processShow(show) {
  console.debug(`Checking for new episodes of ${show.name}.`);
  const current = getCurrentEpisodes(show);
  const known = getKnownEpisodes(show);
  const newEpisodes = getNewEpisodes(await current, await known);
  console.debug("New episodes:", JSON.stringify(newEpisodes));

  if (newEpisodes.length > 0) {
    await notifyNewEpisodes(show, newEpisodes);
    await setKnownEpisodes(show, await current);
  }
}

async function getCurrentEpisodes(show) {
  const json = await (
    await fetch(show.season_json, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15",
      },
    })
  ).json();
  const episodes = json.result.data
    .filter(({ type }) => type === "Full Episode")
    .map(({ episode_number, label, url, airdate }) => ({
      episode: episode_number,
      title: label,
      url: `https://paramountplus.com${url}`,
      airdate,
    }));
  console.debug("Current episodes:", JSON.stringify(episodes));
  return episodes;
}

async function getKnownEpisodes(show) {
  const episodes = JSON.parse((await redis.get(show.redis_key)) ?? "[]");
  console.debug("Known episodes:", JSON.stringify(episodes));
  return episodes;
}

function getNewEpisodes(current, known) {
  return current.filter(
    (currentEp) =>
      !known.find((knownEp) => currentEp.episode === knownEp.episode),
  );
}

async function notifyNewEpisodes(show, newEpisodes) {
  if (!show.notifications) return;

  const notifiers = getNotifiers();
  return await Promise.allSettled(
    newEpisodes.flatMap((newEpisode) =>
      notifiers.map((notifier) => notifier(show, newEpisode)),
    ),
  );
}

function getNotifiers() {
  return [getDiscordNotifier(), getPushoverNotifier()].filter((item) => !!item);
}

function getDiscordNotifier() {
  if (!process.env.SNE_DISCORD_WEBHOOK_URL) return;

  return (show, { episode, title, url, airdate }) => {
    const episodeNumber = `S${show.current_season}E${episode.padStart(2, "0")}`;

    return fetch(process.env.SNE_DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        content:
          `## ${show.name}\n` +
          `${episodeNumber}: _${title}_ is now available\n` +
          `[Watch on Paramount+](${url})`,
        thread_name: `${show.abbr} ${episodeNumber}: ${title}`,
      }),
    })
      .then(() => {
        console.debug("Sent Discord notification");
      })
      .catch((err) => {
        console.error("Error sending Discord notification", err);
      });
  };
}

function getPushoverNotifier() {
  if (process.env.SNE_PUSHOVER_USER && process.env.SNE_PUSHOVER_TOKEN) {
    const p = new Push({
      user: process.env.SNE_PUSHOVER_USER,
      token: process.env.SNE_PUSHOVER_TOKEN,
    });

    return (show, { episode, title, url, airdate }) => {
      const episodeNumber = `S${show.current_season}E${episode.padStart(
        2,
        "0",
      )}`;
      return new Promise(function (resolve, reject) {
        p.send(
          {
            title: show.name,
            message: `${episodeNumber}: “${title}” is now available`,
            url: url,
            url_title: "Watch on Paramount+",
          },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          },
        );
      })
        .then(() => {
          console.debug("Sent Pushover notification");
        })
        .catch((err) => {
          console.error("Error sending Pushover notification", err);
        });
    };
  }
}

function getSlackNotifier() {
  if (process.env.SNE_SLACK_WEBHOOK_URL) {
    const webhook = new IncomingWebhook(process.env.SNE_SLACK_WEBHOOK_URL);

    return (show, { episode, title, url, airdate }) => {
      const episodeNumber = `S${show.current_season}E${episode.padStart(
        2,
        "0",
      )}`;
      return webhook
        .send({
          text:
            `:enterprise: *${show.name}*\n` +
            `${episodeNumber}: _${title}_ is now available\n` +
            `<${url}|Watch on Paramount+>`,
          unfurl_links: false,
        })
        .then(() => {
          console.debug("Sent Slack notification");
        })
        .catch((err) => {
          console.error("Error sending Slack notification", err);
        });
    };
  }
}

async function setKnownEpisodes(show, episodes) {
  await redis.set(show.redis_key, JSON.stringify(episodes));
  console.debug("Updated known episodes:", JSON.stringify(episodes));
}

const SHOWS = [
  {
    abbr: "SNW",
    name: "Star Trek: Strange New Worlds",
    current_season: 3,
    season_json:
      "https://www.paramountplus.com/shows/star-trek-strange-new-worlds/xhr/episodes/page/0/size/18/xs/0/season/3/",
    redis_key: "strange-new-episodes-3",
    notifications: true,
  },
  {
    abbr: "LD",
    name: "Star Trek: Lower Decks",
    current_season: 5,
    season_json:
      "https://www.paramountplus.com/shows/star-trek-lower-decks/xhr/episodes/page/0/size/18/xs/0/season/5/",
    redis_key: "lower-decks-episodes-5",
    notifications: true,
  },
];

const redis = new Redis(process.env.SNE_REDIS_URL);
