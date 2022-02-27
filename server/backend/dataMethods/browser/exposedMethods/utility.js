const cheerio = require("cheerio");

const getDate = (meetData, meetCode, page) =>
  page.exposeFunction("getData", (elm) => {
    const chatData = {
      meet: meetCode,
      user: undefined,
      time: undefined,
      texts: [],
    };
    const $ = cheerio.load(elm);

    chatData.user = $(".YTbUzc").text();

    if (chatData.user == "Dig") {
      chatData.user = "bot";
    }

    chatData.time = $(".MuzmKe").text();
    //special case for the bot
    if (chatData.time == "") {
      return -1;
    }

    chatData.texts.push($(".oIy2qc").text());

    meetData.messages.push(chatData);
  });

//add the texts that are generated inside the current box
const addText = (meetData, page) =>
  page.exposeFunction("addText", (text) => {
    meetData.messages[meetData.messages.length - 1].texts.push(text);
  });

//get the member-username as key
const getKey = (page) =>
  page.exposeFunction("getKey", (html) => {
    const $ = cheerio.load(html);
    const key = $("span.zWGUib").text().trim();
    return key;
  });

const utility = async (meetData) => {
  await getDate(meetData, meetData.meetCode, meetData.page);
  await addText(meetData, meetData.page);
  await getKey(meetData.page);
};

module.exports = utility;
