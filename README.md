# Google-Meet-Bot

### What does the project do?
 
This Google Meet Bot was created to give extra functuinality for google meets. The final product is going to be a fullstack Web-App where users can create, 
manage and organize data that the bots collect.

The final goals of the project are to provide analytics of the activity on meets, 
such as participation from the members,
and to provide the text and voice transcriptions.

### Implemented Functionalities

The Bots are based on web scraping to collect data from the specified google meets. 
This includes gathering useful data from the chat aswell as logging the amount of time users have spoken during the meet. 
The project has been structured in such a way that users can customize bots behaviour such as writing personalized messages in chat.   

### Getting started with the project
##### Steps:
1) To run this project download the source code and open it in your preffered IDE.
2) In the terminal download the depnedencies shown in the package-json file using npm 
> npm install 'dependency'
3) Go to server/backend/Bots/SetupBots.js
4) Here you can customize the bots behaviour
```
/*addBot(
  createBot("TestBot1", false, "njc-wzcv-rba", {
    LaunchMeet: { bool: true },
    GetMeetData: { bool: true },
    //come back to this method later
    TypeInChat: { bool: false, text: "" },
  })
);*/
addBot(
  createBot("Testvbot", false, "txq-strm-rvr", {
    LaunchMeet: { bool: true },
    GetMeetData: { bool: true },
    //come back to this method later
    TypeInChat: { bool: false, text: "" },
  })
);
```
Inside the addBot() function you can create a bot with customized behaviour aswell as giving it a name and a google meet-code

