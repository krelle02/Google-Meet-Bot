const { MeetBot } = require("./botContructor");

const bots = [];
// creates the profile for the bot
function createBot(name, lectio, code, actions) {
  return {
    name: name,
    lectio: lectio,
    code: code,
    actions: actions,
  };
}

//adds the created obj to the list of bots
function addBot(Obj) {
  bots.push(Obj);
}

//init bots
function initBot(bots) {
  const initializedBots = [];
  for (let i = 0; i < bots.length; i++) {
    let botName = bots[i].name;
    let lectio = bots[i].lectio;
    let code = bots[i].code;
    //create botObject
    let bot = eval(botName + " = new MeetBot(botName,lectio,code)");
    //set the actions
    bot.actions = bots[i].actions;
    initializedBots.push(bot);
  }
  return initializedBots;
}

//make bot perform wanted tasks
async function performTasks(Bot) {
  // some error handling
  try {
    for (let act in Bot.actions) {
      if (Bot.actions[act].bool) {
        await Bot[act];
      }
    }
  } catch (error) {
    console.log("the bot closed because it found an error: " + error.message);
    await Bot.browser.close();
  }
}

//run initialized bots
function RUN(initializedBots) {
  for (let i = 0; i < initializedBots.length; i++) {
    let CurrBot = initializedBots[i];
    performTasks(CurrBot);
  }
}

addBot(
  createBot("Testbot", false, "ini-mcxo-buk", {
    LaunchMeet: { bool: true },
    GetMeetData: { bool: true },
    //come back to this method later
    TypeInChat: { bool: false, text: "" },
  })
);

addBot(
  createBot("Testbot1", false, "ini-mcxo-buk", {
    LaunchMeet: { bool: true },
    GetMeetData: { bool: true },
    //come back to this method later
    TypeInChat: { bool: false, text: "" },
  })
);

addBot(
  createBot("Testbot2", false, "ini-mcxo-buk", {
    LaunchMeet: { bool: true },
    GetMeetData: { bool: true },
    //come back to this method later
    TypeInChat: { bool: false, text: "" },
  })
);

console.log(bots);

RUN(initBot(bots));
