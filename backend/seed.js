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
            username: 'Alabama',
            email: 'alabama@dating.com',
            password: 'password1',
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
            password: password2,
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
            password: password3,
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
            password: password4,
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
            password: password5,
            age: 30,
            height: '5ft4in',
            bio: 'this is a bio',
            interest: 'laughter',
            location: 'London',
            image: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2014%2F05%2F2302801_beaut_mcdnote_ec028-1.jpg'
          },
          {
            username: 'Rose',
            email: 'rose@dating.com',
            password: password6,
            age: 30,
            height: '5ft2in',
            bio: 'this is a bio',
            interest: 'cruises',
            location: 'London',
            image: 'https://static.wikia.nocookie.net/jamescameronstitanic/images/d/d3/Rosedewittbukater.jpg/revision/latest/scale-to-width-down/235?cb=20120518041253'
          },
          {
            username: 'Jack',
            email: 'jack@dating.com',
            password: password7,
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
            password: password8,
            age: 30,
            height: '5ft9in',
            bio: 'this is a bio',
            interest: 'horse riding',
            location: 'London',
            image: 'https://cdn.gaystarnews.com/uploads/2015/08/Ledger.jpg'
          },
          {
            username: 'Jack2',
            email: 'jack2@dating.com',
            password: password9,
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
            password: password10,
            age: 28,
            height: '5ft7in',
            bio: 'this is a bio',
            interest: 'shopping',
            location: 'London',
            image: 'https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000196273702.jpg'
          },
          {
            username: 'Edward',
            email: 'edward@dating.com',
            password: password11,
            age: 39,
            height: '6ft3in',
            bio: 'this is a bio',
            interest: 'business',
            location: 'London',
            image: 'https://cdn10.bigcommerce.com/s-x8dfmo/products/3147/images/26205/Richard-Gere-in-Pretty-Woman-Premium-Photograph-and-Poster-1011470__92751.1432420227.1280.1280.jpg?c=2'
          },
          {
            username: 'Stacey',
            email: 'stacey@dating.com',
            password: password12,
            age: 26,
            height: '5ft4in',
            bio: 'this is a bio',
            interest: 'causing trouble',
            location: 'London',
            image: 'https://images6.fanpop.com/image/photos/33600000/Stacey-american-history-x-33639686-200-200.jpg'
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