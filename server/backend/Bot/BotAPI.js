const { MeetBot } = require("./botContructor");

class BotAPI {
  static createBot(name, lectio, code, actions) {
    return {
      name: name,
      lectio: lectio,
      code: code,
      actions: actions,
    };
  }
  static initBot(Bot) {
    const botName = Bot.name;
    const lectio = Bot.lectio || false;
    const code = Bot.code;
    //create botObject
    //const bot = eval(botName + " = new MeetBot(botName,lectio,code)");
    //set the actions
    const initBot = new MeetBot(botName, lectio, code);
    initBot.actions = Bot.actions;
    return initBot;
  }
  static setTimer(time) {
    const Timer = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Timer has been resolved");
      }, time);
    });
    return Timer;
  }
  static async runBot(Bot, Timer) {
    // some error handling
    await Timer;
    for (let act in Bot.actions) {
      if (Bot.actions[act].bool) {
        try {
          await Bot[act];
        } catch (error) {
          console.log(
            "the bot closed because it found an error: " + error.message
          );
          await Bot.browser.close();
        }
      }
    }
  }
}

module.exports = BotAPI;
