/*
// initial solution

async function scrapeMeetData(page,meetCode) {
    setInterval(async () => {
        const messages = [];
        let data = await page.content();
        const $ = cheerio.load(data);
        const elements = $('#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.R3Gmyc.qwU8Me > div.WUFI9b > div.hWX4r > div > div.z38b6').children();
        //creates chat-objects with the corresponding information
        let totalTexts = 0;
        elements.each((index, box) => {
            const chatData = {
                meet: meetCode,
                user: undefined,
                time: undefined,
                texts: []
            };
            //could maybe be optimized
            chatData.user = $(box).children().first().children().first().text();

            if(chatData.user = 'dig') {
                chatData.user = 'bot';
            };

            //could maybe be optimized
            chatData.time = $(box).children().first().children().last().text();
            //could maybe be optimized
            const textSection = $(box).children().last().children();
    
            totalTexts += textSection.length;
        
            textSection.each((index,text) => {
                const message = $(text).text();
                chatData.texts.push(message);  
            });
            console.log(messages.includes(chatData));
        });
        console.log(messages);

    }, 500);
};*/

const chatObserver = require("./browser/chatObs");

async function getChatData(meetData) {
  await chatObserver(meetData.page);
  setInterval(() => console.log(meetData.messages), 1000);
}

module.exports = {
  getChatData,
};
