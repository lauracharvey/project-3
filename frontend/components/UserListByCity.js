import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const UserListByCity = (props) => {
  const [userData, updateUserData] = useState([])
  const cityName = props.match.params.cityName

  useEffect(() => {
    axios.get('/api/users')
      .then(axiosResp => {
        updateUserData(axiosResp.data)
      })
  }, [])

  function filteredUsers() {
    const filteredUsers = userData.filter(users => {
      return users.location === cityName
    })
    return filteredUsers
  }

  return <main className="userListMain">
    <header>
      <Navbar />
    </header>
    <section className="cardSection">
      {filteredUsers().map((user, index) => {
        return <div key={index}>
          <Link to={`/user/${user._id}`}>
            <div className="cardOuter">
              <div className="imageOuter">
                <div className="imageContainer">
                  <img src={user.image} alt={user.username} />
                </div>
              </div>
              <div className="textContainer">
                <h2>{user.username}</h2>
              </div>
            </div>
          </Link>
        </div>
      })}
    </section>
  </main>

}
export default UserListByCity