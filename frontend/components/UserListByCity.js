import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  // console.log(filteredUsers())

  return <main>
    <section>
      {filteredUsers().map((user, index) => {
        return <div key={index}>
          <Link to={`/user/${user._id}`}>
            <div>
              <div>
                <img src={user.image} alt={user.username} />
              </div>
              <div>
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