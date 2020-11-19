import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const UpdateUserProfile = (props) => {
  const userId = props.match.params.userId
  const [cityData, updateCityData] = useState([])
  const token = localStorage.getItem('token')


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

  const inputFields = ['username', 'email', 'password',
    'passwordConfirmation', 'age', 'height', 'bio', 'interest', 'image']

  useEffect(() => {
    axios.get(`/api/user/${userId}`)
      .then(res => {
        updateFormData(res.data)
      })
  }, [])

  useEffect(() => {
    axios.get('/api/cities')
      .then(res => {
        updateCityData(res.data)
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
    updateFormData(data)
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.put(`/api/user/${userId}`, formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        props.history.push(`/user/${userId}`)
      })
  }


  // delete profile
  function handleDelete() {
    axios.delete(`/api/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        props.history.push('/')
      })
  }

  return <main className="updateUserMain">
    <header>
      <Navbar />
    </header>
    <h1>Hi <strong>{formData.username}</strong></h1>
    <h2>Update your Profile</h2>
    <div className="userImage">
      <img src={formData.image} />
    </div>

    <form onSubmit={handleSubmit}>
      {inputFields.map((field, i) => {
        return <div key={i}>
          <label>{field}</label>
          <input
            type="text"
            onChange={handleData}
            value={formData[field] || ''}
            name={field}
          />
        </div>
      })}

      <label>city
        <select name="location" onChange={handleLocation}>
          {cityData.map((city, index) => {
            return <option selected={city.name === formData.location} key={index} value={city.name}>{city.name}</option>
          })}
        </select>
      </label>

      <button>Update</button>

    </form>
    {/* <button onClick={handleDelete}>
      Delete Profile
    </button> */}
  </main >
}

export default UpdateUserProfile