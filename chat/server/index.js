const express = require('express')
// const socketio = require('socket.io')
const http = require('http')
const { addUser, removeUser, getUser, getUsersInRoom } = require('../server/users')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const router = require('./router')


const app = express()
const server = http.createServer(app)
//makes socketio server
// const io = socketio(server)
// !changed to kill CORS issues. doesnt like creds being true
// ! if origin is '*' (all)
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
})

app.use(cors())
app.use(router)

//socket is connected as a client side socket
//you manage everything for this socket in the function below
io.on('connect', (socket) => {
  console.log('we have a new connection!')
  // this is the back end for JOIN in chat.js
  // on join the function is called
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room })
    if (error) return callback(error)

    socket.join(user.room)
    //tells user welcome
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the ${user.room} chat.` })

    //sends a specific message to everyone except the user
    //!emitted from backend to front end
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` })
    //joins a user to a room
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

    callback()
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })

    callback()
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)
    if (user) {
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` })
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
    }
  })

})

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`)
})