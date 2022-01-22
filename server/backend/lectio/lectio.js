
const cheerio = require('cheerio');
const superagent = require('superagent').agent();


async function filterMeetLink(meetLink) {
    const linkString = await meetLink;
    const length = linkString.length;
    const meetCode = linkString.slice(length - 12, length);
    console.log(meetCode);
    return meetCode;
}

async function getMeetLink(url,formData) {
    //link for errors
    const dummyLink = 'meet.google.com/sbt-fwdj-rms';
    // login to website
    let dashboard = await superagent
    .post('https://www.lectio.dk/lectio/243/login.aspx')
    .send(formData)
    .set('Content-Type','application/x-www-form-urlencoded');
    //get url data
    const forside = await superagent.get(url);
    //load forside html data

    let $ = cheerio.load(forside.text);
    const hrefLink = ($('#s_m_Content_Content_skemaIsland_pa').children('div').first().children().first().attr('href'));
    //load forside html data 
    if (hrefLink == undefined) {
        return dummyLink;
    }
    const modul = await superagent.get('https://www.lectio.dk' + hrefLink);
    //load modul html data
    $ = cheerio.load(modul.text);
    // homemade acces to link - find en bedre måde
    const meetLink = () => { 
        if ($('a:contains("Meet")')[1]) { 
            return $('a:contains("Meet")')[1].attribs.href;    
        }
        else if ($('a:contains("Meet")')[2]) {
            return $('a:contains("Meet")')[2].attribs.href; 
        }
        else if ($('a:contains("Meet")')[3]) {
            return $('a:contains("Meet")')[3].attribs.href;
        }
        else {
            return dummyLink;
        };     
    };
    return filterMeetLink(meetLink());
};

module.exports = {
    getMeetLink,
    filterMeetLink,
};

 

