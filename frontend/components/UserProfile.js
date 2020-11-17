import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserProfile = (props) => {
  const userId = props.match.params.userId
  const [user, updateUser] = useState({})

  // console.log(userId)

  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then(resp => {
        // console.log(resp.data)
        updateUser(resp.data)
      })
  }, [])

  if (!user._id) {
    return <div>
      <h2>
        Loading ...
      </h2>
    </div>
  }

  return <main>

    <section className="riderMain">
      <h1>{user.name}</h1>
      <img src={user.image} />
      <h2>Location</h2>
      <h3>{user.location}</h3>
      <h2>Age</h2>
      <h3>{user.age}</h3>
      <h2>Height</h2>
      <h3>{user.height}</h3>
      <h2>Bio</h2>
      <h3>{user.bio}</h3>
      <h2>Interests</h2>
      <h3>{user.interest}</h3>
    </section>
    <section>
      <button>Chat</button>
    </section>


  </main>
}

export default UserProfile