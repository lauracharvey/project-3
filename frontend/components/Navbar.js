import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {

  function handleLogout() {
    localStorage.removeItem('token')
    props.history.push('/')
  }

  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu is-active">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/" className="button is-dark">Home</Link>
            {/* <Link to="/signup" className="button is-dark">Signup</Link>
            <Link to="/login" className="button is-dark">Login</Link> */}
            {localStorage.getItem('token')
              && <Link className="button is-dark" to="/cities">Cities</Link>}

            {localStorage.getItem('token')
              && <Link className="button is-success" to="/cities/add-city">Add City</Link>}

            {localStorage.getItem('token') 
            && <Link to={`user/userId/update`}><button className="button is-light">Edit Profile</button></Link>}

            {localStorage.getItem('token')
              && <button className="button is-light"
                onClick={handleLogout}>
                Logout
              </button>}

          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default withRouter(Navbar)