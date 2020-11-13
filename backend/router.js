
const express = require('express')
const router = express.Router()
const userController = require('./controllers/user')
const citiesController = reqire('./controllers/cities')
const secureRoute = require('./middleware/secureRoute')

router.route('/users')
  .get(userController.getUsers)

router.route('/user/:id')
  .get(userController.getSingleUser)

router.route('/signup')
  .post(userController.createUser)

router.route('/login')
  .post(userController.loginUser)

router.route('/cities')
  .post(citiesController.getCities)

router.route('/cities/:name')
  .get(userController.getSingleCity)
  .post(userController.addCity)


module.exports = router