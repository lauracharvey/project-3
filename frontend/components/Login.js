import React, { useState } from 'react'
import axios from 'axios'

const Login = (props) => {

  const [loginFormData, updateLoginFormData] = useState({
    email: '',
    password: ''
  })

  function handleChange(event) {
    const data = {
      ...loginFormData,
      [event.target.name]: event.target.value
    }
    updateLoginFormData(data)
  }

  function handleSubmit(event) {
    event.preventDefault()

    axios.post('/api/login', loginFormData)
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        props.history.push('/cities')
      })
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label>Email</label>
      <input
        type="text"
        onChange={handleChange}
        value={loginFormData.email}
        name="email"
      />
    </div>
    <div>
      <label>Password</label>
      <input
        type="password"
        onChange={handleChange}
        value={loginFormData.password}
        name="password"
      />
    </div>
    <button>Login</button>
  </form>
}

export default Login