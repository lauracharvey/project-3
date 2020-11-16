const City = require('../models/cities')

function getCities(req, res) {
  City
    .find()
    .populate('user')
    .then(citiesList => {
      res.send(citiesList)
    })
    .catch(error => res.send(error))
}

function getSingleCity(req, res) {
  const cityName = req.params.cityName
  City
    .findOne({ name: { $regex: cityName, $options: 'i' } })
    .populate('comments.user')
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

function deleteCity(req, res) {
  const id = req.params.id
  const currentUser = req.currentUser
  // console.log(`id : ${id} , ${currentUser.email}`)
  City
    .findById(id)
    .then(city => {
      if (!city.user.equals(currentUser._id)) {
        return res.status(401).send({ message: 'Unauthorized to delete' })
      }

      city.deleteOne()
      res.send({ message: '⤵️You successfully deleted the element👌', city })
    })
    .catch(error => res.send(error))
}


function editCity(req, res) {
  const id = req.params.id
  const body = req.body
  const currentUser = req.currentUser

  City
    .findById(id)
    .then(city => {
      if (!city.user.equals(currentUser._id) && !city) return res.send({ message: 'no city found' })
      city.set(body)
      city.save()
      res.send(city)

    })
    .catch(error => res.send(error))
}

//comments

function createComment(req, res) {
  const comment = req.body
  comment.user = req.currentUser
  City
    .findById(req.params.cityId)
    .populate('comments.user')
    .then(city => {
      if (!city) return res.status(404).send({ message: 'Not found' })

      city.comments.push(comment)
      return city.save()

    })
    .then(city => res.send(city))
    .catch(err => res.send(err))
}

function editComment(req, res) {
  City
    .findById(req.params.cityId)
    .populate('comments.user')
    .then(city => {
      if (!city) return res.status(404).send({ message: 'Not found' })

      const comment = city.comments.id(req.params.commentId)

      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(401).send({ message: 'Unauthorized' })
      }
      comment.set(req.body)
      return city.save()
    })
    .then(city => res.send(city))
    .catch(err => res.send(err))
}

function deleteComment(req, res) {
  City
    .findById(req.params.cityId)
    .populate('comments.user')
    .then(city => {
      if (!city) return res.status(404).send({ message: 'Not found' })

      const comment = city.comments.id(req.params.commentId)

      if (!comment.user.equals(req.currentUser._id)) {
        return res.status(401).send({ message: 'Unauthorized' })
      }
      comment.remove()
      return city.save()

    })
    .then(city => res.send(city))
    .catch(err => res.send(err))
}

function singleComment(req, res) {
  City
    .findById(req.params.cityId)
    .populate('comments.user')
    .then(city => {
      if (!city) return res.status(404).send({ message: 'Not found' })

      const comment = city.comments.id(req.params.commentId)

      // if (!comment.user.equals(req.currentUser._id)) {
      //   return res.status(401).send({ message: 'Unauthorized' })
      // }

      return comment

    })
    .then(comment => res.send(comment))
    .catch(err => res.send(err))
}





module.exports = {
  addCity,
  getSingleCity,
  getCities,
  deleteCity,
  editCity,
  createComment,
  editComment,
  deleteComment,
  singleComment
}
