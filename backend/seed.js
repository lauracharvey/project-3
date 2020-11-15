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
            username: 'Alabama',
            email: 'alabama@dating.com',
            password: 'password1',
            passwordConfirmation: 'password1',
            age: 28,
            height: '5ft7in',
            bio: 'this is a bio',
            interest: 'monogamy',
            location: 'London',
            image: 'https://i.pinimg.com/originals/f8/f7/88/f8f788bf1f1f2123dccbb7c003f24d90.jpg'
          },
          {
            username: 'Clarence',
            email: 'clarence@dating.com',
            password: 'password2',
            passwordConfirmation: 'password2',
            age: 32,
            height: '6ft2in',
            bio: 'this is a bio',
            interest: 'Elvis',
            location: 'London',
            image: 'https://pbs.twimg.com/profile_images/973315324958396416/rXp7Y_9i_400x400.jpg'
          },
          {
            username: 'Derek',
            email: 'derek@dating.com',
            password: 'password3',
            passwordConfirmation: 'password3',
            age: 31,
            height: '6ft1in',
            bio: 'this is a bio',
            interest: 'basketball',
            location: 'London',
            image: 'https://images-na.ssl-images-amazon.com/images/I/31XCoK-Pc3L._AC_.jpg'
          },
          {
            username: 'Noah',
            email: 'noah@dating.com',
            password: 'password4',
            passwordConfirmation: 'password4',
            age: 34,
            height: '6ft',
            bio: 'this is a bio',
            interest: 'boating',
            location: 'London',
            image: 'https://images6.fanpop.com/image/photos/37200000/Noah-Calhoun-rkebfan4ever-37249868-236-300.jpg'
          },
          {
            username: 'Allie',
            email: 'allie@dating.com',
            password: 'password5',
            passwordConfirmation: 'password5',
            age: 30,
            height: '5ft4in',
            bio: 'this is a bio',
            interest: 'laughter',
            location: 'Madrid',
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2014%2F05%2F2302801_beaut_mcdnote_ec028-1.jpg'
          },
          {
            username: 'Rose',
            email: 'rose@dating.com',
            password: 'password6',
            passwordConfirmation: 'password6',
            age: 30,
            height: '5ft2in',
            bio: 'this is a bio',
            interest: 'cruises',
            location: 'Dublin',
            image: 'https://static.wikia.nocookie.net/jamescameronstitanic/images/d/d3/Rosedewittbukater.jpg/revision/latest/scale-to-width-down/235?cb=20120518041253'
          },
          {
            username: 'Jack',
            email: 'jack@dating.com',
            password: 'password7',
            passwordConfirmation: 'password7',
            age: 30,
            height: '5ft9in',
            bio: 'this is a bio',
            interest: 'painting',
            location: 'London',
            image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-titanic-leonardo-dicaprio.jpg'
          },
          {
            username: 'Ennis',
            email: 'ennis@dating.com',
            password: 'password8',
            passwordConfirmation: 'password8',
            age: 30,
            height: '5ft9in',
            bio: 'this is a bio',
            interest: 'horse riding',
            location: 'Paris',
            image: 'https://cdn.gaystarnews.com/uploads/2015/08/Ledger.jpg'
          },
          {
            username: 'Jack2',
            email: 'jack2@dating.com',
            password: 'password9',
            passwordConfirmation: 'password9',
            age: 30,
            height: '5ft9in',
            bio: 'this is a bio',
            interest: 'horse riding',
            location: 'London',
            image: 'https://decider.com/wp-content/uploads/2015/05/brokeback-mountain-jake-gyllenhaal.png'
          },
          {
            username: 'Vivian',
            email: 'vivian@dating.com',
            password: 'password10',
            passwordConfirmation: 'password10',
            age: 28,
            height: '5ft7in',
            bio: 'this is a bio',
            interest: 'shopping',
            location: 'Paris',
            image: 'https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000196273702.jpg'
          },
          {
            username: 'Edward',
            email: 'edward@dating.com',
            password: 'password11',
            passwordConfirmation: 'password11',
            age: 39,
            height: '6ft3in',
            bio: 'this is a bio',
            interest: 'business',
            location: 'Dublin',
            image: 'https://cdn10.bigcommerce.com/s-x8dfmo/products/3147/images/26205/Richard-Gere-in-Pretty-Woman-Premium-Photograph-and-Poster-1011470__92751.1432420227.1280.1280.jpg?c=2'
          },
          {
            username: 'Stacey',
            email: 'stacey@dating.com',
            password: 'password12',
            passwordConfirmation: 'password12',
            age: 26,
            height: '5ft4in',
            bio: 'this is a bio',
            interest: 'causing trouble',
            location: 'Madrid',
            image: 'https://images6.fanpop.com/image/photos/33600000/Stacey-american-history-x-33639686-200-200.jpg'
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