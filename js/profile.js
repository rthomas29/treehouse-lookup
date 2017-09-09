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
            const points = profile.points;
            module.exports.points = points;
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
