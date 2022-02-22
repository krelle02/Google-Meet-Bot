const cheerio = require("cheerio");
const superagent = require("superagent").agent();

const URL = "https://www.lectio.dk/lectio/243/forside.aspx";
const formDataLectio = {
  time: "0",
  __EVENTTARGET: "m$Content$submitbtn2",
  __EVENTARGUMENT: "",
  __SCROLLPOSITION: "",
  __VIEWSTATEX:
    "0gAAAGlpZQotNDQ2NjMxODMxaWwCawCBbAJoaWRsBGhpZGwCZw1pbAJrAWUZL2xlY3Rpby9pbWcvZmF2aWNvbjU3LnBuZ2RnAmlsAmsCZQNvZmZsBIFpZGwCgWlkbAKBaWRsAmhpamRqbgFlBzIwMjEvMjJuAWUEMjAyMX4BcWwBaGRnA2lkbAJnBWlkbAKBaWRsAmcJaWRsBIFpbAJrA2UWTWFyc2VsaXNib3JnIEd5bW5hc2l1bWRnB2lkbAKBaWRsAoFpamlsAmsEcGRkZGRkBQAAABNWYWxpZGF0ZVJlcXVlc3RNb2RlBGhyZWYMYXV0b2NvbXBsZXRlCWlubmVyaHRtbAdDaGVja2VkAOZz40kgbAmPIadiKko+2OJYHl36",
  __VIEWSTATEY_KEY: "",
  __VIEWSTATE: "",
  __EVENTVALIDATION:
    "vTZsk1DvtixDW/7WMSK2msXLzYwB/NtpV0Nzk3Juyq5xE7ekChGuXQcvSNmnXMg+7vLGlWjhY2Z39sEoIKX/veCIIO5b+MFkGiomdr2mSc2K8yRKNg7Rjrzh0zCCvai/q5zj42PtFqOLNjm/iDNbBXX1gEBl9CMbkkIhOYyWYevyZqoO9vSlJknPvNHtwMsT7IfJURZetkGfwmToVTb3Tk/OrXJWpNbubby4TzNFScg=",
  m$Content$username: process.env.LECTIO_USR,
  m$Content$password: process.env.LECTIO_PSW,
  masterfootervalue: "X1!ÆØÅ",
  LectioPostbackId: "",
};

async function filterMeetLink(meetLink) {
  const linkString = await meetLink;
  const length = linkString.length;
  const meetCode = linkString.slice(length - 12, length);
  console.log(meetCode);
  return meetCode;
}

async function getMeetLink() {
  //link for errors
  const dummyLink = "meet.google.com/sbt-fwdj-rms";
  // login to website
  let dashboard = await superagent
    .post("https://www.lectio.dk/lectio/243/login.aspx")
    .send(formDataLectio)
    .set("Content-Type", "application/x-www-form-urlencoded");
  //get url data
  const forside = await superagent.get(URL);
  //load forside html data

  let $ = cheerio.load(forside.text);
  const hrefLink = $("#s_m_Content_Content_skemaIsland_pa")
    .children("div")
    .first()
    .children()
    .first()
    .attr("href");
  //load forside html data
  if (hrefLink == undefined) {
    return dummyLink;
  }
  const modul = await superagent.get("https://www.lectio.dk" + hrefLink);
  //load modul html data
  $ = cheerio.load(modul.text);
  // homemade acces to link - find en bedre måde
  const meetLink = () => {
    if ($('a:contains("Meet")')[1]) {
      return $('a:contains("Meet")')[1].attribs.href;
    } else if ($('a:contains("Meet")')[2]) {
      return $('a:contains("Meet")')[2].attribs.href;
    } else if ($('a:contains("Meet")')[3]) {
      return $('a:contains("Meet")')[3].attribs.href;
    } else {
      return dummyLink;
    }
  };
  return filterMeetLink(meetLink());
}

module.exports = {
  getMeetLink,
  filterMeetLink,
};
