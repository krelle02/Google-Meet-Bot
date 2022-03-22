const express = require("express");
const BotAPI = require("../backend/Bot/BotAPI");
const PostSchema = require("../Api/models/Post");

const router = express.Router();

router.post("/create", async (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const code = req.body.code;
  const time = parseFloat(req.body.time);

  const actions = {
    LaunchMeet: { bool: true },
    GetMeetData: { bool: true },
    TypeInChat: { bool: false, text: "" },
  };

  const bot = BotAPI.createBot(name, false, code, actions);
  const initBot = BotAPI.initBot(bot);
  const Timer = BotAPI.setTimer(time);
  try {
    await BotAPI.runBot(initBot, Timer);
    console.log("bot has been created");
    res.send("bot has beenn created");
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
