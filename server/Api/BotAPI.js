const { compareDocumentPosition } = require("domutils");
const { MeetBot } = require("../backend/Bot/botContructor");
const getTime = require("./getTime")

//a clas that saves the botdata provided from the frontend. An instance of this class can be used to create, save, and run the bot. 
class BotAPI {

  isRunning = false

  constructor(name,code,time) {
    this.botData =  {
      name: name,
      code: code,
      time: time,
      actions: {
        LaunchMeet: { bool: true },
        GetMeetData: { bool: true },
        TypeInChat: { bool: false, text: "" },
      },
      lectio: false,
    }
  }
  create_Bot_Instance() {
    this.Bot = new MeetBot(this.botData.name, this.botData.lectio || false, this.botData.code);
    //set the actions
    this.Bot.actions = this.botData.actions;
  }
  create_Timer() {
    this.Timer = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Timer has been resolved");
      }, this.botData.time);
    });
  }
  async execute_actions() { 
    // some error handling
    await this.Timer;
    try {
      for (let act in this.Bot.actions) {
        if (this.Bot.actions[act].bool) {
          await this.Bot[act];
        }
      }
    } catch (error) {
      console.log("the bot closed because it found an error: " + error.message);
      await this.Bot.browser.close();
      this.isRunning = false
    }
  }
  run_bot() {
    if(!this.isRunning) {
      this.create_Bot_Instance()
      this.create_Timer()
      this.execute_actions()
      this.isRunning = true
    }
  }  
}

module.exports = BotAPI;
