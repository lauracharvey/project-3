import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'

const UserProfile = (props) => {
  const userId = props.match.params.userId
  const [user, updateUser] = useState({})

  console.log(userId)

  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then(resp => {
        console.log(resp.data)
        updateUser(resp.data)
      })
  }, [])

  if (!user.name) {
    return <div>
      <h2>
        Loading ...
      </h2>
    </div>
  }

  return <main>
    <header>
      <Navbar/>
    </header>
    <section className="riderMain">
      <h1>Hello User</h1>
    </section>
  </main>
}

export default UserProfile