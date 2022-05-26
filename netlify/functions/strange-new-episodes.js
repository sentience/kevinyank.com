import fetch from "node-fetch";
const { schedule } = require("@netlify/functions");
const { IncomingWebhook } = require("@slack/webhook");
const Redis = require("ioredis");
const Push = require("pushover-notifications");
const { isDeepStrictEqual } = require("util");

// https://crontab.guru/#*_1-7_*_*_THU (UTC) = 9PM WED – 3AM THU (US EST)
module.exports.handler = schedule("* 1-7 * * THU", handler);

async function handler(event, context) {
  console.log("Checking for new episodes.");

  const currentEpisodes = await getCurrentEpisodes();
  const knownEpisodes = await getKnownEpisodes();
  const newEpisodes = getNewEpisodes(currentEpisodes, knownEpisodes);
  console.debug("New episodes:", JSON.stringify(newEpisodes));

  if (newEpisodes.length > 0) {
    notifyNewEpisodes(newEpisodes);
    setKnownEpisodes(currentEpisodes);
  }

  return {
    statusCode: 200,
  };
}

async function notifyNewEpisodes(newEpisodes) {
  if (process.env.SNE_PUSHOVER_USER && process.env.SNE_PUSHOVER_TOKEN) {
    const p = new Push({
      user: process.env.SNE_PUSHOVER_USER,
      token: process.env.SNE_PUSHOVER_TOKEN,
    });

    newEpisodes.forEach(async ({ episode, title, url, airdate }) => {
      const episodeNumber = `S1E${episode.padStart(2, "0")}`;
      await p.send({
        title: "Star Trek: Strange New Worlds",
        message: `${episodeNumber}: “${title}” is now available`,
        url: url,
        url_title: "Watch on Paramount+",
      });
    });
  }

  if (process.env.SNE_SLACK_WEBHOOK_URL) {
    const webhook = new IncomingWebhook(process.env.SNE_SLACK_WEBHOOK_URL);

    newEpisodes.forEach(async ({ episode, title, url, airdate }) => {
      const episodeNumber = `S1E${episode.padStart(2, "0")}`;
      await webhook.send({
        text:
          `:enterprise: *Star Trek: Strange New Worlds*\n` +
          `${episodeNumber}: _${title}_ is now available\n` +
          `<${url}|Watch on Paramount+>`,
      });
    });
  }
}

async function getCurrentEpisodes() {
  const response = await fetch(STRANGE_NEW_WORLDS_SEASON_1_URL);
  const episodes = (await response.json()).result.data.map(
    ({ episode_number, label, url, airdate }) => ({
      episode: episode_number,
      title: label,
      url: `https://paramountplus.com${url}`,
      airdate,
    })
  );
  console.debug("Current episodes:", JSON.stringify(episodes));
  return episodes;
}

async function getKnownEpisodes() {
  const episodes = JSON.parse((await redis.get(SNE_REDIS_KEY)) ?? "[]");
  console.debug("Known episodes:", JSON.stringify(episodes));
  return episodes;
}

async function setKnownEpisodes(episodes) {
  await redis.set(SNE_REDIS_KEY, JSON.stringify(episodes));
  console.debug("Updated known episodes:", JSON.stringify(episodes));
}

function getNewEpisodes(current, known) {
  return current.filter(
    (currentEp) =>
      !known.find((knownEp) => currentEp.episode === knownEp.episode)
  );
}

const STRANGE_NEW_WORLDS_SEASON_1_URL =
  "https://www.paramountplus.com/shows/star-trek-strange-new-worlds/xhr/episodes/page/0/size/18/xs/0/season/1/";
const SNE_REDIS_KEY = process.env.SNE_REDIS_KEY ?? "strange-new-episodes";

const redis = new Redis(process.env.SNE_REDIS_URL);
