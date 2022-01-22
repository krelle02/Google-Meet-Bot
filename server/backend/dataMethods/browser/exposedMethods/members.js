const cheerio = require("cheerio");

const stopWatch = require("./stopWatch");

//updates the 'speaking' state of the member
const updateMember = (meetData, page) =>
  page.exposeFunction("updateMember", (key, bool) => {
    meetData.members[key].speaking = bool;
    console.log(
      meetData.botName +
        " siger at " +
        key +
        " snakker: " +
        meetData.members[key].speaking
    );
    if (meetData.members[key].speaking) {
      stopWatch.start();
    } else {
      //get the time that passed since starting the timer
      meetData.members[key].speakingTime += stopWatch.stop();
      console.log(
        meetData.botName +
          " siger at " +
          key +
          " har snakket i: " +
          meetData.members[key].speakingTime
      );
    }
  });

//adds the member to members
const addMember = (meetData, meetCode, page) =>
  page.exposeFunction("addMember", async () => {
    const data = await page.content();
    const $ = cheerio.load(data);
    const box = $(".GvcuGe").children().last();
    const key = $("span.ZjFb7c", box).text();

    meetData.members[key] = {
      meet: meetCode,
      box: box,
      observer: null,
      speaking: false,
      speakingTime: 0,
    };
  });

const members = async (meetData) => {
  await updateMember(meetData, meetData.page);
  await addMember(meetData, meetData.meetCode, meetData.page);
};

module.exports = members;
