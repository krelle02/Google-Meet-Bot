const express = require("express");
const BotAPI = require("./BotAPI");
const PostSchema = require("../Api/models/Post");
const router = express.Router();
const getTime = require("./getTime")
const BotAPIController = require("./BotAPIController")

const botAPIController = new BotAPIController()  

router.post("/create", async (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const code = req.body.code;
  const time = getTime(req.body.date,req.body.time)

  try {
    const botApi = new BotAPI(name,code,time)
    const id = botAPIController.addBotAPI(botApi)
    console.log(botAPIController.get_api_list())
    console.log(`bot has been created with id of ${id}`);
    res.json({id:id});

  } catch (error) {
    res.send("there was an error");
    throw new Error(error.message);
  }
});

router.post("/run", async (req,res) => {
  const id = req.body.id
  const botApi = botAPIController.getBotAPI(id)
  try {
    res.send("Bot is waiting")
    botApi.run_bot() 
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = router;
