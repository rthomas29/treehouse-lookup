'use strict';

const printMessage = (username, badgeCount, points, category) => { 
  let message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' points in ' + category + '.';
  console.log(message);
}

const printErrorMessage = (error) => {
   console.error(error.message);
};

module.exports.print = printMessage;
module.exports.printErr = printErrorMessage;