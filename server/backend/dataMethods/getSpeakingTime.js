const voiceObserver = require("./browser/voiceObs");

async function getSpeakingTime(page) {
  await voiceObserver(page);
}

module.exports = {
  getSpeakingTime,
};
