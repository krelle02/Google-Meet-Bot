const { getChatData } = require("./getChatData");
const { getSpeakingTime } = require("./getSpeakingTime");

const exposePage = require("./browser/exposedMethods/exposed");

async function runDataMethods(bot) {
  meetData = bot.meetData;

  await exposePage(meetData);
  await bot.openChat();
  await getChatData(meetData.page);
  await bot.openVoice();
  await getSpeakingTime(meetData.page);
}

module.exports = {
  runDataMethods,
};
