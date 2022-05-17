import fetch from "node-fetch";
const { schedule } = require("@netlify/functions");
const { IncomingWebhook } = require("@slack/webhook");
const Redis = require("ioredis");
const Push = require("pushover-notifications");
const { isDeepStrictEqual } = require("util");

// https://crontab.guru/#*_18-23,0-3_*_*_WED-THU
// Wish we could say 6PM WED-3AM THU, but Cron doesn't support that, so this
// also checks 0-3AM WED and 6PM-midnight THU. :P
module.exports.handler = schedule("* 18-23,0-3 * * WED-THU", handler);

async function handler(event, context) {
  console.log("Checking for new episodes.");

  const episodes = await getCurrentEpisodes();
  const knownEpisodes = await getKnownEpisodes();
  const newEpisodes = difference(episodes, knownEpisodes);
  console.debug("New episodes:", JSON.stringify(newEpisodes));

  if (newEpisodes.length > 0) {
    notifyNewEpisodes(newEpisodes);
    setKnownEpisodes(episodes);
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

    newEpisodes.forEach(async ({ episode, title, airdate }) => {
      await p.send({
        message: `Episode ${episode} of Star Trek: Strange New Worlds is live: “${title}”`,
      });
    });
  }

  if (process.env.SNE_SLACK_WEBHOOK_URL) {
    const webhook = new IncomingWebhook(process.env.SNE_SLACK_WEBHOOK_URL);

    await webhook.send({
      text: `Episode ${episode} of Star Trek: Strange New Worlds is live: “${title}”`,
    });
  }
}

async function getCurrentEpisodes() {
  const response = await fetch(STRANGE_NEW_WORLDS_SEASON_1_URL);
  const episodes = (await response.json()).result.data.map(
    ({ episode_number, label, airdate }) => ({
      episode: episode_number,
      title: label,
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

function difference(array1, array2) {
  return array1.filter(
    (item1) => !array2.find((item2) => isDeepStrictEqual(item1, item2))
  );
}

const STRANGE_NEW_WORLDS_SEASON_1_URL =
  "https://www.paramountplus.com/shows/star-trek-strange-new-worlds/xhr/episodes/page/0/size/18/xs/0/season/1/";
const SNE_REDIS_KEY = process.env.SNE_REDIS_KEY ?? "strange-new-episodes";

const redis = new Redis(process.env.SNE_REDIS_URL);
