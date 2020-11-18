import React from 'react'
import closedIcon from '../Icons/closedIcon.png'
import onlineIcon from '../Icons/onlineIcon.jpg'

import '../components/styles/infoBar.css'

const InfoBar = ({ room }) => (
<div className="infoBar">
  <div className="leftInnerContainer">
    <img className="onlineIcon" src={onlineIcon} alt="online" />
    <h3>{room}</h3>
  </div>
  <div className="rightInnerContainer">
    {/* when a user clicks this, it will leave the chat and
    laod the homepage */}
    <a href="/"><img className="closedIcon" src={closedIcon} alt="closed" /></a>
  </div>
</div>

)

export default InfoBar