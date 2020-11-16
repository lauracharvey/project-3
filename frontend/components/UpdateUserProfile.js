import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const UpdateUserProfile = (props) => {
  const userId = props.match.params.userId
  const [cityData, updateCityData] = useState([])

  const [formData, updateFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    age: '',
    height: '',
    bio: '',
    interest: '',
    location: '',
    image: ''
  })

  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then(resp => {
        updateFormData(resp.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`/api/cities`)
      .then(resp => {
        updateCityData(resp.data)
      })
  }, [])

  function handleData(event) {
    const name = event.target.name
    const value = event.target.value
    const data = {
      ...formData,
      [name]: value
    }
    updateFormData(data)
  }

  function handleLocation(event) {
    const data = {
      ...formData,
      location: `${event.target.value}`
    }
    console.log(data)
    updateFormData(data)
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log(formData)

    const token = localStorage.getItem('token')
    axios.put(`/api/user/${userId}`, formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        console.log(resp.data)
        props.history.push(`/cities/${formData.location}`)
      })
  }

  return <main className="addRiderMain">
    <header>
      <Navbar />
    </header>
    <h1>Hi {formData.username}</h1>
    <h2>Update your Profile</h2>
    <form onSubmit={handleSubmit}>
      <label>Username
    <input
          type="text"
          onChange={handleData}
          value={formData.username}
          name="username"
        />
      </label>

      <label>Email
    <input
          type="email"
          onChange={handleData}
          value={formData.email}
          name="email"
        />
      </label>

      <label>City
      <select name="location" onChange={handleLocation}>
        {cityData.map((city, index) => {
          return <option key={index} value={city.name}>{city.name}</option>
        })}
      </select>
      </label>

      <label>Password
    <input
          type="password"
          onChange={handleData}
          value={formData.password}
          name="password"
        />
      </label>

      <label>Confirm Password
    <input
          type="password"
          onChange={handleData}
          value={formData.passwordConfirmation}
          name="passwordConfirmation"
        />
      </label>

      <label>Age
    <input
          type="number"
          onChange={handleData}
          value={formData.age}
          name="age"
        />
      </label>

      <label>Height
    <input
          type="text"
          onChange={handleData}
          value={formData.height}
          name="height"
        />
      </label>

      <label>Bio
    <input
          type="text"
          onChange={handleData}
          value={formData.bio}
          name="bio"
        />
      </label>
      <label>Interests
    <input
          type="text"
          onChange={handleData}
          value={formData.interest}
          name="interest"
        />
      </label>
      <label>Image
    <input
          type="text"
          onChange={handleData}
          value={formData.image}
          name="image"
        />
      </label>
      <button>Update</button>
    </form>
  </main>
}

export default UpdateUserProfile