const express = require('express')
const routes = require('./js/routes')

const app = express()
const port = process.env.PORT || 5000

app.use('/', routes)
app.use(express.static('public'))
app.set('view engine', 'pug')

app.listen(port, '0.0.0.0', () => {
  console.log('up and running')
})
