const https = require('https');
const printLib = require('./printer.js');

const get = (myName) => {
  try {
    https.get(`https://teamtreehouse.com/${myName}.json`, (response) => {
      response.setEncoding('utf8');
      let body = '';
      response.on('data', (chunk) => {
        body += chunk;
      });
      response.on('end', () => {
        if (response.statusCode === 200) {
          try {
            const profile = JSON.parse(body);
            const numBadges = profile.badges.length;
            const category = process.argv[2];
            const catPoints = profile.points[process.argv[2]];
            printLib.print(myName, numBadges, catPoints, category);
          } catch (error) {
            printLib.printErr(error);
          }
        } else {
          console.log(`Status Code: ${response.statusCode} ${response.statusMessage}`);
        }
      });
    });
  } catch (error) {
    printLib.print(error);
  }
};

module.exports.get = get;
