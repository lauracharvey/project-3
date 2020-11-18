import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/join.css'

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const cityData =[ 
    {
      name: 'Madrid',
      country: 'Spain'

    },
    {
      name: 'Glasgow',
      country: 'Scotland'
    
    },
    {
      name: 'Dublin',
      country: 'Ireland'
    }
  ]
  // const [cityData, updateCityData] = useState([])

  //gets cities from API to map in menu
  // useEffect(() => {
    // axios.get('/api/cities')
      // .then(resp => {
        // updateCityData(resp.data)
      // })
  // }, [])
// 

  return (
  <div className="joinOuterContainer">
    <div className="joinInnerContainer">
      <h1 className="heading">Join</h1>
      
        <input placeholder="name" className="joinInput" type="text" onChange={
          (event) => setName(event.target.value)} />
      
      <div className="dropdown">
        <label>
          Chose City
          <select className="joinInput" room="location" onChange={(event) => setRoom(event.target.value)}>
            {cityData.map((city, index) => {
              return <option key={index} value={city.name}>{city.name}</option>
            })}
          </select>
        </label>
       
      </div>
      {/* url stops you having to pass props */}
      {/* does nothing if no name or no room selected */}
      <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        <button className="button" type="submit">Sign In</button>

      </Link>
    </div>
    </div>
  )
}

export default Join