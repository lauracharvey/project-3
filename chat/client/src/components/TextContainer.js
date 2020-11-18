import React from 'react'
import onlineIcon from '../Icons/onlineIcon.jpg'

import '../components/styles/TextContainer.css'

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Sort Chat</h1>
     
    </div>
    {
      users
        ? (
          <div>
            <h1>Sorts currently online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
)

export default TextContainer