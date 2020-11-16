
const express = require('express')
const router = express.Router()
const userController = require('./controllers/user')
const citiesController = require('./controllers/cities')
const secureRoute = require('./middleware/secureRoute')

router.route('/users')
  .get(userController.getUsers)

router.route('/user/:id')
  .get(userController.getSingleUser)
  .put(secureRoute, userController.updateUserProfile)

router.route('/signup')
  .post(userController.createUser)

router.route('/login')
  .post(userController.loginUser)

router.route('/cities')
  .get(citiesController.getCities)
  .post(secureRoute, citiesController.addCity)

router.route('/cities/:cityName')
  .get(citiesController.getSingleCity)
  .delete(secureRoute, citiesController.deleteCity)
  .put(secureRoute, citiesController.editCity)

// comments
router.route('/cities/:cityId/comments')
  .post(secureRoute, citiesController.createComment)

router.route('/cities/:cityId/comments/:commentId')
  .put(secureRoute, citiesController.editComment)
  .delete(secureRoute, citiesController.deleteComment)
  .get(secureRoute, citiesController.singleComment)



module.exports = router