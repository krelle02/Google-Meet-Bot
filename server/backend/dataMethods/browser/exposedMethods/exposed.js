const members = require("./members");
const ulility = require("./utility");


//allows functions to be accesed in page.evaluate
const exposePage = async (meetData) => {
  members(meetData);
  ulility(meetData, meetData.page);
};

module.exports = exposePage;
