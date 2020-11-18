const mongoose = require('mongoose')
const User = require('./models/users')
const Cities = require('./models/cities')
const axios = require('axios')


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
            location: 'Madrid',
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
            location: 'Madrid',
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
            location: 'Dublin',
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
        const imageMap = {
          Kabul: 'https://images.unsplash.com/photo-1602394696015-cffefafffae8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE4MzcyN30'
        }

        const promise = new Promise((resolve) => {
          axios.get('https://restcountries.eu/rest/v2/all')
            .then((resp) => {
              const cityInfo = resp.data.filter(country => country.capital)
                .map(country => {
                  return {
                    name: country.capital,
                    country: country.name,
                    lat: country.latlng[0],
                    lng: country.latlng[1],
                    user: users[0],
                    image: imageMap[country.capital] ? imageMap[country.capital] : ''
                  }
                })
              resolve(cityInfo)
            })
        })
        return promise
      })
      .then((fullData) => {
        return Cities.create(fullData)
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