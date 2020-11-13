
const express = require('express')
const router = express.Router()
const userController = require('./controllers/user')
const citiesController = require('./controllers/cities')
const secureRoute = require('./middleware/secureRoute')
const { getCities } = require('./controllers/cities')

router.route('/users')
  .get(userController.getUsers)

router.route('/user/:id')
  .get(userController.getSingleUser)

router.route('/signup')
  .post(userController.createUser)

router.route('/login')
  .post(userController.loginUser)

router.route('/cities')
  .get(citiesController.getCities)
  .post(citiesController.addCity)

router.route('/cities/:Id')
  .get(citiesController.getSingleCity)
  


module.exports = router