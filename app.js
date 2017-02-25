const profile = require('./profile.js');

const users = process.argv.slice(3);
users.map(profile.get);
