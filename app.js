'use strict';

const profile = require('./profile.js');
let users = process.argv.slice(3);
users.map(profile.get);
