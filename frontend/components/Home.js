import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.jpg'

const Home = () => {

  return <main className="homeMain">
      <img className="hero" src={Logo} alt="logo"/>
      <input className="homeInput" type="text" placeholder="dev@dev.com"></input>
      <input className="homeInput" type="password" placeholder="********"></input>
    <Link to="/login"><button>Login</button></Link>
    <p>not registered yet?</p>
    <Link to="/signup"><button>Signup</button></Link>
  </main>
}

export default Home