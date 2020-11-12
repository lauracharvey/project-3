const mongoose = require('mongoose')
const Users = require('./models/users')

mongoose.connect(
  'mongodb://localhost/sortDB',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)

    console.log('mongoose connected!')
    mongoose.connection.db.dropDatabase()
      .then(() => {
        return Users.create([
          {
            username: "Alabama",
            email: "alabamaworley@dating.com",
            password: "password1",
            age: 28,
            height: "5ft7in",
            bio: "this is a bio",
            interest: "monogamy",
            location: "London",
            image: "https://i.pinimg.com/originals/f8/f7/88/f8f788bf1f1f2123dccbb7c003f24d90.jpg"
          },
          {
            username: "Alabama",
            email: "alabamaworley@dating.com",
            password: password1,
            age: 28,
            height: "5ft7in",
            bio: "this is a bio",
            interest: "monogamy",
            location: "London",
            image: "https://i.pinimg.com/originals/f8/f7/88/f8f788bf1f1f2123dccbb7c003f24d90.jpg"
          }
        ])
      })
      .then(users => {
        console.log(`${users.length} users created!`)
        return users
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        mongoose.connection.close()
      })
  }
)