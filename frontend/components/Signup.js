import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from '../images/Logo.jpg'

const Signup = (props) => {
  const [cityData, updateCityData] = useState([])

  const [signupFormData, updateSignupFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    bio: '',
    availability: '',
    specialisms: [],
    languages: [],
    availableFor: '',
    location: '',
    image: ''
  })

  const [errors, updateErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    bio: '',
    availability: '',
    specialisms: [],
    languages: [],
    availableFor: '',
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

  function handleAvailability(event) {
    const data = {
      ...formData,
      availability: `${event.target.value}`
    }
    updateFormData(data)
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

  return <main className="signupMain">
    <img src={Logo} alt="Logo"/>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <label>username
      <input
          type="text"
          onChange={handleChange}
          value={signupFormData.username}
          name="username"
        />
        {errors.username && <p style={{ color: 'red' }}>
          {`There was a problem with your ${errors.username.path} `}
        </p>}
      </label>

      <label>email
      <input
          type="text"
          onChange={handleChange}
          value={signupFormData.email}
          name="email"
        />
        {errors.email && <p style={{ color: 'red' }}>
          {`There was a problem with your ${errors.email.path} `}
        </p>}
      </label>

      <label>password
      <input
          type="password"
          onChange={handleChange}
          value={signupFormData.password}
          name="password"
        />
        {errors.password && <p style={{ color: 'red' }}>
          {`There was a problem with your ${errors.password.path} `}
        </p>}
      </label>

      <label>confirm password
      <input
          type="password"
          onChange={handleChange}
          value={signupFormData.passwordConfirmation}
          name="passwordConfirmation"
        />
        {errors.passwordConfirmation && <p style={{ color: 'red' }}>
          {'passwords does not match '}
        </p>}
      </label>

      <label>bio
      <textarea
          onChange={handleChange}
          value={signupFormData.bio}
          name="bio"
        />
        {errors.bio && <p style={{ color: 'red' }}>
          {` Please write someting about yourself in ${errors.bio.path} `}
        </p>}
      </label>

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

      <label>availability
        <select name="location" onChange={handleAvailability}>
          <option>Immediate</option>
          <option>1 - 2 Weeks</option>
          <option>1 - 2 Months</option>
          <option>Busy for the Foreseeable</option>
        </select>
      </label>

      <label>specialisms
        <input
          type="text"
          onChange={handleChange}
          value={signupFormData.specialisms}
          name="specialisms"
        />
      </label>

      <label>languages
        <input
          type="text"
          onChange={handleChange}
          value={signupFormData.languages}
          name="languages"
        />
      </label>

      <label>image
      <input
          type="text"
          onChange={handleChange}
          value={signupFormData.image}
          name="image"
        />
        {errors.image && <p style={{ color: 'red' }}>
          {' Please upload your image link '}
        </p>}
      </label>

      <button>Submit</button>

    </form >
  </main>

}

export default Signup