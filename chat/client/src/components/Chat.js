import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from '../components/InfoBar'
import Input from '../components/Input'
import Messages from '../components/Messages'
import TextContainer from '../components/TextContainer'

import '../components/styles/chat.css'

const ENDPOINT = 'http://localhost:5000'

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    // !const data = queryString.parse(location.search)
    // location comes from react router as a prop
    // returns the end of the URL passed from join
    // eg?name=nameInput&room=roomInput
    //data becomes an object with name and room
    // ! quicker way of caputring info:
    const { name, room } = queryString.parse(location.search)

    // giving socket the host
    socket = io(ENDPOINT, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }
    })

    setRoom(room)
    setName(name)

    // allows you to emit an event from the server to
    //other users.
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
      }
    });
  }, [location.search])

  useEffect(() => {
    socket.on('message', message => {
      //taking messages array and adding message to it.
      setMessages(messages => [...messages, message])
    })

    socket.on("roomData", ({ users }) => {
      setUsers(users)
    })
  }, [])

  //send message function
  const sendMessage = (event) => {
    event.preventDefault()
    //stops page refreshing (default behaviour of keypress)
    if (message) {
      //sends to socket in index.js
      //when message is sent, input field clears
      //! this does not clear the input field - you did that onkeypress
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
}

export default Chat