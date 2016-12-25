'use strict';

const https = require('https');
const printLib = require('./printer.js');
const get = (myName) => {
  try {
    // Connect to API URL (http://teamtreehouse.com/username.json)
    let request = https.get('https://teamtreehouse.com/' + myName + '.json', (response) => {
        response.setEncoding('utf8');
        let body = '';
        // Read requested data. Data comes in streams, so must concat. into one string.
        response.on('data', (chunk) => {
          body += chunk;
      });
        // after receiving the complete response, fire this function
        response.on('end', () => {
          if (response.statusCode === 200) {
            try {
                 // profile is the body of the response parsed into a JSON object.
                let profile = JSON.parse(body);
                let numBadges = profile.badges.length;
                let category = process.argv[2];
                let catPoints = profile.points[process.argv[2]];
                printLib.print(myName, numBadges, catPoints, category);
            } catch (error) {
              // catches any parse errors
              printLib.printErr(error);
          }
  } else { 
      // catch status code errors
      console.log('Status Code: ' + response.statusCode + ' ' + response.statusMessage);
    }
  });
});
  // catch connection error
  } catch (error) {
    printLib.print(error);
  }
}
  
module.exports.get = get;