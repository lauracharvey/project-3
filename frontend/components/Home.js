import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return <div >
    <Link to="/signup" className="button is-dark">Signup</Link>
    <Link to="/login" className="button is-success">Login</Link>
  </div>

}

export default Home