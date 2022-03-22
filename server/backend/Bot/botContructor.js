const { getMeetLink } = require("../lectio/lectio");
const { runDataMethods } = require("../dataMethods/runDataMethods.js");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
require("dotenv").config();

function MeetBot(botName, lectio, code) {
  const link = "https://apps.google.com/meet/";
  const actions = {
    LaunchMeet: { bool: false },
    GetMeetData: { bool: false },
    TypeInChat: { bool: false, text: "" },
    //setter for the actions to be modified
    set setActions(value) {
      this.actions = value;
    },
  };
  this.name = botName;

  this.getCode = () => {
    return lectio ? getMeetLink() : code;
  };

  this.launchMeet = async function () {
    this.meetCode = await this.getCode();
    this.browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-notifications", "--mute-audio", "--enable-automation"],
      ignoreDefaultArgs: true,
    });
    this.page = await this.browser.newPage();
    //allow camera to enter meet
    const context = this.browser.defaultBrowserContext();
    await context.overridePermissions(link.origin, [
      "microphone",
      "camera",
      "notifications",
    ]);
    //set proper viewport
    const desiredWidth = 2000;
    const desiredHeight = 900;
    const sf = 1;
    await this.page.setViewport({
      width: parseInt(desiredWidth / sf),
      height: parseInt(desiredHeight / sf),
      deviceScaleFactor: sf,
    });

    await this.page.goto(link);

    //click on login
    let loginSelector = "span.cta-wrapper:nth-child(1) > a:nth-child(1)";
    await this.page.waitForSelector(loginSelector);
    await this.page.click(loginSelector);

    await this.page.waitForNavigation();

    //type email in login
    await this.page.waitForSelector("#identifierId");
    await this.page.type("#identifierId", process.env.GOOGLE_USR, {
      delay: 100,
    });
    let btnSelector = "#identifierNext > div > button";
    await this.page.click(btnSelector);

    await this.page.waitForNavigation();

    //type password in login

    let pswSelector = "#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input";
    await this.page.waitForSelector(pswSelector, {
      visible: true,
      timeout: 3000,
    });
    await this.page.type(pswSelector, process.env.GOOGLE_PSW, { delay: 100 });

    //click login
    let btnSelector2 = "#passwordNext > div > button";
    await this.page.click(btnSelector2);

    await this.page.waitForNavigation();

    //enter meetcode
    let enterCodeSelector = "#i3";
    await this.page.waitForSelector(enterCodeSelector, {
      visible: true,
      timeout: 3000,
    });
    await this.page.type(enterCodeSelector, this.meetCode, { delay: 100 });

    //click deltag
    let deltagSelector =
      "#yDmH0d > c-wiz > div > div.S3RDod > div > div.Qcuypc > div.Ez8Iud > div > div.KOM0mb > div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb > button";
    await this.page.click(deltagSelector);

    await this.page.waitForNavigation();

    // turn off cam using Ctrl+E
    await this.page.waitForTimeout(200);
    await this.page.keyboard.down("ControlLeft");
    await this.page.keyboard.press("KeyE");
    await this.page.keyboard.up("ControlLeft");

    //turn off mic using Ctrl+D
    await this.page.waitForTimeout(200);
    await this.page.keyboard.down("ControlLeft");
    await this.page.keyboard.press("KeyD");
    await this.page.keyboard.up("ControlLeft");

    await this.page.waitForTimeout(1000);

    //navigate UI and enter meet - can change to click method
    for (let i = 1; i < 9; i++) {
      await this.page.keyboard.press("Tab");
      await this.page.waitForTimeout(100);
    }
    await this.page.keyboard.press("Enter");
  };
  //allow acces to function with property notation
  Object.defineProperty(this, "LaunchMeet", {
    get: async function () {
      return this.launchMeet();
    },
  });
  //function that opens chat
  this.openChat = async () => {
    const chatSelector =
      "div.r6xAKc:nth-child(3) > span:nth-child(1) > button:nth-child(1)";
    await this.page.waitForSelector(chatSelector);
    await this.page.click(chatSelector);
    await this.page.waitForTimeout(1000);
  };

  //function that opens voice-section
  this.openVoice = async () => {
    const voiceSelector =
      "div.r6xAKc:nth-child(2) > span:nth-child(1) > button:nth-child(1)";
    await this.page.waitForSelector(voiceSelector);
    await this.page.click(voiceSelector);
    await this.page.waitForTimeout(1000);
  };

  this.getMeetData = async () => {
    //initializes the data for the meet
    this.meetData = {
      botName: this.name,
      meetCode: this.meetCode,
      page: this.page,
      members: {},
      messages: [],
    };
    //runs another file with methods
    await runDataMethods(this);
  };
  //allow acces to function with property notation
  Object.defineProperty(this, "GetMeetData", {
    get: async function () {
      return this.getMeetData();
    },
  });
  this.typeInChat = async () => {
    //..
  };
  //allow acces to function with property notation
  Object.defineProperty(this, "TypeInChat", {
    get: async function () {
      return this.typeInChat();
    },
  });
}

module.exports = {
  MeetBot,
};
