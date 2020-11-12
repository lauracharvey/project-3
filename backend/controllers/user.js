const User = require('../models/user')



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



module.exports = {
  createUser
  
}