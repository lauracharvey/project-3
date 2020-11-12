const express = require('express')
const expressServer = express()
const { port } = require('./config/environment')
require('dotenv').config()
const Router = require('./router')

mongoose.connect(
  'mongodb://localhost/sortdb',
  { userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
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

expressServer.use ('/api', Router)

expressServer.listen(8000)
