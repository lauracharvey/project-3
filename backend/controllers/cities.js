const { default: Axios } = require('axios')
const City = require('../models/cities')


function getCities(req, res) {
  City
    .find()
    // .populate('user')
    .then(citiesList => {
      res.send(citiesList)
    })
    .catch(error => res.send(error))
}

function getSingleCity(req, res) {
  const Id = req.params.Id
  City
    .findById(Id)
    .then(city => {
      res.send(city)
    })
}

function addCity(req, res) {
  req.body.user = req.currentUser
  City
    .create(req.body)
    .then(city => {
      res.send(city)
    })
    .catch(error => res.send(error))
}

module.exports = {
  addCity,
  getSingleCity,
  getCities
}
