const printMessage = (username, badgeCount, points, category) => {
  const message = `${username} has ${badgeCount} total badge(s) ${points} points in ${category} .`;
  console.log(message);
};

const printErrorMessage = (error) => {
  console.error(error.message);
};

module.exports.print = printMessage;
module.exports.printErr = printErrorMessage;
