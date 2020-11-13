
const express = require('express')
const router = express.Router()
const userController = require('./controllers/user')
const secureRoute = require('./middleware/secureRoute')

router.route('/users')
  .get(userController.getUsers)

router.route('/user/:userId')
  .get(userController.getSingleUser)

router.route('/signup')
  .post(userController.createUser)

router.route('/login')
  .post(userController.loginUser)

module.exports = router