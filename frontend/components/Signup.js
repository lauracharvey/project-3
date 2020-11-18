import React, { useState } from 'react'
import axios from 'axios'

const Signup = (props) => {

  const [signupFormData, updateSignupFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    age: '',
    height: '',
    bio: '',
    interest: '',
    location: 'dublin',
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

  function handleSubmit(event) {

    event.preventDefault()

    axios.post('/api/signup', signupFormData)
      .then(resp => {
        // console.log(resp.data)
        if (resp.data.errors) {
          updateErrors(resp.data.errors)
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
        {'Does not match password'}
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
        {`There was a problem with your ${errors.height.path} `}
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
      <label>Location </label>
      <select name="location" onChange={handleChange}>
        <option value="dublin">Dublin</option>
        <option value="london">London</option>
        <option value="madrid">Madrid</option>
        <option value="paris">Paris</option>
      </select>
      {errors.location && <p style={{ color: 'red' }}>
        {' Please choose a city '}
      </p>}
    </div>
    <div>
      <label>Image </label>
      <input
        type="text"
        onChange={handleChange}
        value={signupFormData.image}
        name="image"
      />
      {errors.bio && <p style={{ color: 'red' }}>
        {' Please upload your image link '}
      </p>}
    </div>


    <button>Signup</button>
  </form >

}

export default Signup