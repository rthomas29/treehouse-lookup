const https = require('https');
const printLib = require('./printer.js');

module.exports = {
  get: (myName, req, res) => {
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
              let imageSrc = 'https://achievement-images.teamtreehouse.com/treehouse.png';
              if (profile.gravatar_url) {
                imageSrc = profile.gravatar_url;
              }
              res.render('data', { points, myName, imageSrc });
            } catch (error) {
              printLib.printErr(error);
            }
          } else {
            res.render('error', { response });
          }
        });
      });
    } catch (error) {
      printLib.print(error);
    }
  },
};
