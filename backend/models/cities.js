const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


//schema for comment
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const citySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [commentSchema]
})

citySchema.plugin(uniqueValidator)

module.exports = mongoose.model('City', citySchema)


