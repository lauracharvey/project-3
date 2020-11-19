const mongoose = require('mongoose')
const User = require('./models/users')
const Cities = require('./models/cities')

mongoose.connect(
  'mongodb://localhost/sortdb',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)

    console.log('mongoose connected!')
    mongoose.connection.db.dropDatabase()
      .then(() => {
        return User.create([
          {
            username: 'Larry',
            email: 'larry@developer.com',
            location: 'London',
            password: 'password1',
            passwordConfirmation: 'password1',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            image: 'https://cms.qz.com/wp-content/uploads/2017/04/larry-page-alphabet-goog-investors-letter.jpg?quality=75&strip=all&w=900&h=900&crop=1'
          },
          {
            username: 'Sergey',
            email: 'sergey@developer.com',
            password: 'password2',
            passwordConfirmation: 'password2',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'London',
            image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7c254bbe6f78090d831f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D475%26cropX2%3D2887%26cropY1%3D168%26cropY2%3D2582'
          },
          {
            username: 'Bill',
            email: 'bill@developer.com',
            password: 'password3',
            passwordConfirmation: 'password3',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'Madrid',
            image: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg'
          },
          {
            username: 'Mark',
            email: 'mark@developer.com',
            password: 'password4',
            passwordConfirmation: 'password4',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'Madrid',
            image: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/09/09/11/markzuckerberg.jpg?crop=493:329,smart&width=640'
          },
          {
            username: 'Tim',
            email: 'tim@developer.com',
            password: 'password5',
            passwordConfirmation: 'password5',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'Dublin',
            image: 'https://www.w3.org/2016/10/tbl.jpeg'
          },
          {
            username: 'Linus',
            email: 'Linus@developer.com',
            password: 'password6',
            passwordConfirmation: 'password6',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'Dublin',
            image: 'https://cdn.arstechnica.net/wp-content/uploads/2015/08/LinuxCon_Europe_Linus_Torvalds_05.jpg'
          },
          {
            username: 'Grace',
            email: 'grace@developer.com',
            password: 'password7',
            passwordConfirmation: 'password7',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'London',
            image: 'https://cdn.britannica.com/95/149295-050-109D07FA/Grace-Murray-Hopper-groundbreaking-ceremony-San-Diego-1985.jpg'
          },
          {
            username: 'Ada',
            email: 'ada@developer.com',
            password: 'password8',
            passwordConfirmation: 'password8',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'Paris',
            image: 'https://metro.co.uk/wp-content/uploads/2013/10/ay95895977ada-lovelace-engl1.jpg?quality=90&strip=all'
          },
          {
            username: 'Radia',
            email: 'radia@developer.com',
            password: 'password9',
            passwordConfirmation: 'password9',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'London',
            image: 'https://www.comsoc.org/sites/default/files/styles/400wide/public/images/2020-2020-01/Radia-Perlman.jpg?itok=42Dsigxb'
          },
          {
            username: 'Anita',
            email: 'anita@developer.com',
            password: 'password10',
            passwordConfirmation: 'password10',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'Paris',
            image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Anita_Borg.jpg'
          },
          {
            username: 'Elizabeth',
            email: 'elizabeth@developer.com',
            password: 'password11',
            passwordConfirmation: 'password11',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'Dublin',
            image: 'https://web.stanford.edu/dept/SUL/library/extra4/sloan/mousesite/gallery/photos/3856-007.jpg'
          },
          {
            username: 'Karen',
            email: 'karen@developer.com',
            password: 'password12',
            passwordConfirmation: 'password12',
            availability: 'Immediate',
            specialisms: ['Frontend', 'Backend', 'Full Stack'],
            languages: ['JavaScript', 'HTML', 'React.js', 'Express', 'Node.js'],
            availableFor: 'any project involving react',
            bio: 'this is a bio',
            location: 'Madrid',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Karen_Sp%C3%A4rck.jpg'
          }
        ])
      })
      .then(users => {
        console.log(`${users.length} users created!`)
        return users
      })

      .then((users) => {
        return Cities.create([

          {
            name: 'London',
            country: 'England',
            bio: 'London is layered with history, where medieval and Victorian complement a rich and vibrant modern world. The Tower of London and Westminster neighbour local pubs and markets, and time-worn rituals like the changing of the guards take place as commuters rush to catch the Tube. It’s a place where travellers can time-hop through the city, and when they’re weary, do as Londoners do and grab a “cuppa” tea.',
            image: 'https://london.ac.uk/sites/default/files/styles/promo_medium/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=VADuaEL7',
            user: users[0]
          },
          {
            name: 'Madrid',
            country: 'Spain',
            bio: 'If Madrid feels like a fairytale, it’s partially because so many buildings here have a confectionary, castle-like look to them. Even City Hall is astounding, with its white pinnacles and neo-Gothic features. A self-guided architecture tour can begin by the great bear statue in the central Puerta del Sol. Wander by the fanciful Royal Palace before absorbing the natural beauty of Retiro Park, then visit one of the city’s many art museums. Artistry can also be found on your plate and in your glass, so close out each day sipping Spanish rioja and sampling tapas.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/e6/bf/caption.jpg?w=700&h=300&s=1',
            user: users[0]
          },
          {
            name: 'Paris',
            country: 'France',
            bio: 'Nowhere else on earth makes the heart swoon like the mention of Paris. The city lures with its magnificent art, architecture, culture, and cuisine, but there’s also a quieter magic waiting to be explored: the quaint cobbled lanes, the sweet patisseries around the corner, and the cozy little bistros that beckon with a glass of Beaujolais. Get ready to make Paris your own.',
            image: 'https://media-cdn.tripadvisor.com/media/photo-c/768x250/17/15/6d/d6/paris.jpg',
            user: users[0]
          },

          {
            name: 'Dublin',
            country: 'Ireland',
            bio: 'Dublin brings to mind literary giants, Georgian architecture, and Guinness galore. Nights here are alive with pub crawls and spirited music. But the days are also full of revelry, with enchanting architecture, tucked-away bookstores, and singular museums like the Chester Beatty. Green spaces abound, such as the St Stephens Green or Iveagh Gardens. And no trip is complete without a tour of a local distillery, where you can sample local spirits like Jameson or Teeling.',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/09/e7/36/ha-penny-bridge.jpg',
            user: users[0]
          }
        ])
      })
      .then(cities => {
        console.log(`${cities.length} city have been created`)
      })


      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        mongoose.connection.close()
      })
  }
)