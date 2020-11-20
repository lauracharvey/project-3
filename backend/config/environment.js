const secret = 'This is a really really long secret string no one is going to guess 65sdfa.'

const port = process.env.PORT || 8000

const env = process.env.NODE_ENV || 'development'

const dbURI = env === 'production'
? process.env.MONGODB_URI
: `mongodb://localhost/sortdb-${env}`

module.exports = {
secret, port, dbURI
}