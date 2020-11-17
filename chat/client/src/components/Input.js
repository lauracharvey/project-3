import React from 'react'
import './styles/input.css'

const Input = ({ message, setMessage, sendMessage }) => {

return <form className="form">
  <input className="input"
  type="text"
  placeholder="type your message"
  onChange={
    (event => setMessage(event.target.value))}
    onKeyPress={(event) => {
      if (event.key === 'Enter'){  
        sendMessage(event)
         event.target.value = ''
        }
     }}
  />
  <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
</form>

}




export default Input