const express = require('express');
const profile = require('./profile.js');
const parser = require('body-parser');

const router = express.Router();

router.use(parser.urlencoded({ extended: false }));
router.use(parser.json());

router.get('/', (req, res) => {
  res.render('search');
});

router.post('/search', (req, res) => {
  const username = req.body.username;
  const userProfile = profile.get(username);
  console.log(userProfile.points);
  res.redirect('/');
});
module.exports = router;
