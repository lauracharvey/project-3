const express = require('express')
const expressServer = express()
const { port } = require('./config/environment')
require('dotenv').config()
const Router = require('.router')

console.log(process.env.hello)

expressServer.use((req, res, next) => {
  console.log(`Incoming request, ${req.method} to ${req.url}`)
  next()
})

expressServer.listen(8000)
