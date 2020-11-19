import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Signup = (props) => {
  const [cityData, updateCityData] = useState([])

  const [signupFormData, updateSignupFormData] = useState({
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

  const [errors, updateErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    height: '',
    bio: '',
    interest: '',
    location: '',
    image: ''
  })
  useEffect(() => {
    axios.get('/api/cities')
      .then(res => {
        updateCityData(res.data)
      })
  }, [])

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    // console.log(`name: ${name}, value ${value}`)
    const data = {
      ...signupFormData,
      [name]: value
    }
    const newErrors = {
      ...errors,
      [name]: ''
    }

    updateSignupFormData(data)
    updateErrors(newErrors)
  }

  function handleLocation(event) {
    const data = {
      ...signupFormData,
      location: `${event.target.value}`
    }
    updateSignupFormData(data)
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('/api/signup', signupFormData)
      .then(res => {
        // console.log(res.data)
        if (res.data.errors) {
          updateErrors(res.data.errors)
        } else {
          props.history.push('/')
        }
      })

  }




  return <form onSubmit={handleSubmit}>
    <div>
      <label>Username</label>
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.username}
        name="username"
      />
      {errors.username && <p style={{ color: 'red' }}>
        {`There was a problem with your ${errors.username.path} `}
      </p>}
    </div>
    <div>
      <label>Email </label>
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.email}
        name="email"
      />
      {errors.email && <p style={{ color: 'red' }}>
        {`There was a problem with your ${errors.email.path} `}
      </p>}
    </div>
    <div>
      <label>Password </label>
      <input
        type="password"
        onChange={handleChange}
        value={signupFormData.password}
        name="password"
      />
      {errors.password && <p style={{ color: 'red' }}>
        {`There was a problem with your ${errors.password.path} `}
      </p>}
    </div>
    <div>
      <label>Confirm Password </label>
      <input
        type="password"
        onChange={handleChange}
        value={signupFormData.passwordConfirmation}
        name="passwordConfirmation"
      />
      {errors.passwordConfirmation && <p style={{ color: 'red' }}>
        {'passwords does not match '}
      </p>}
    </div>
    <div>
      <label>Age </label>
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.age}
        name="age"
      />
    </div>
    <div>
      <label>Height </label>
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.height}
        name="height"
      />
      {errors.height && <p style={{ color: 'red' }}>
        {`error with ${errors.height.path} `}
      </p>}
    </div>
    <div>
      <label>Bio </label>
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.bio}
        name="bio"
      />
      {errors.bio && <p style={{ color: 'red' }}>
        {` Please write someting about yourself in ${errors.bio.path} `}
      </p>}
    </div>
    <div>
      <label>Interest </label>
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.interest}
        name="interest"
      />
      {errors.interest && <p style={{ color: 'red' }}>
        {` Please write someting about your ${errors.interest.path} `}
      </p>}
    </div>
    <div>
      <label>city
        <select name="location" onChange={handleLocation}>
          {cityData.map((city, index) => {
            return <option key={index} value={city.name}>{city.name}</option>
          })}
        </select>
        {errors.location && <p style={{ color: 'red' }}>
          {' Please choose a city '}
        </p>}
      </label>
    </div>
    <div>
      <label>Image </label>
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.image}
        name="image"
      />
      {errors.image && <p style={{ color: 'red' }}>
        {' Please upload your image link '}
      </p>}
    </div>


    <button>Signup</button>
  </form >

}

export default Signup