const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const mongooseHidden = require('mongoose-hidden')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  availability: { type: String, required: true },
  specialisms: { type: [String], required: true },
  languages: { type: [String], required: true },
  availableFor: { type: String, required: true },
  bio: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true }
})

userSchema.plugin(mongooseHidden({ defaultHidden: { password: true, email: true } }))

userSchema.plugin(uniqueValidator)
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'should match')
    }
    next()
  })
// we got this from Kianna, it will prevent the console to complain about password matching
userSchema
  .pre('save', function hashPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()

  })


userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

// this will make sure the email has the right format 
userSchema.path('email').validate(function (email) {
  const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/
  return emailRegex.test(email)
})

module.exports = mongoose.model('User', userSchema)