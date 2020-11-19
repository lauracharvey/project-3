const express = require('express')
const expressServer = express()
require('dotenv').config()
const Router = require('./router')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


mongoose.connect(
  'mongodb://localhost/sortdb',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) console.log(err)
    else console.log('Mongoose connected successfully!')
  }
)

expressServer.use((req, res, next) => {
  console.log(`Incoming request, ${req.method} to ${req.url}`)
  next()
})

expressServer.use(bodyParser.json())

expressServer.use('/api', Router)

app.use('/', express.static(dist));

app.get('*', function(req, res) {
  res.sendFile(path.join(dist, 'index.html'));
});

expressServer.listen(8000)
