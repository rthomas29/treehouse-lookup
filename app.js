const express = require('express');
const routes = require('./js/routes');

const app = express();
const port = process.env.port || 3000;

app.use('/', routes);
app.use(express.static('public'));
app.set('view engine', 'pug');

app.listen(port, () => {
  console.log('up and running');
});

