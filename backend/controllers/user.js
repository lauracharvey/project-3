const User = require('../models/users')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function createUser(req, res) {
  const body = req.body
  console.log(body)
  User
    .create(body)
    .then(user => {
      console.log(user)
      res.send(user)
    })
    .catch(error => res.send(error))
}

function loginUser(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user.validatePassword(req.body.password)) {
        return res.status(401).send({ message: 'Unauthorized' })
      }

      const token = jwt.sign(
        { sub: user._id },
        secret,
        { expiresIn: '48h' }
      )

      res.status(202).send({ token, message: 'Login was successful!' })
    })

}

function getUsers(req, res) {
  const body = req.body
  User
    .find()
    .populate('user')
    .then(userList => {
      res.send(userList)
    })
    .catch(error => res.send(error))
}

function getSingleUser(req, res) {
  const id = req.params.id

  User
    .findById(id)
    .then(singleUser => {
      res.send(singleUser)
    })
    .catch(error => res.send(error))
}

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getSingleUser
}