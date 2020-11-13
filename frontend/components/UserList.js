import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
  const [userData, updateUserData] = useState([])

  useEffect(() => {
    // This is causing async problems 
    // it works if you physically click reload on the page
    // after its launches... need a wee bit of help here. 
    axios.get('/api/users')
      .then(axiosResp => {
        updateUserData(axiosResp.data)
        console.log(axiosResp.data)
      })
  }, [])

  return <section className="section">
    <div className="container">
      <div className="columns is-multiline is-mobile">
        {userData.map((user, index) => {
          return <div key={index} className="column is-one-third-desktop is-half-tablet is-half-mobile">
            <Link to={`/user/${user._id}`}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <div className="card-image">
                        <p className="title is-4">{user.username}</p>
                        <p>{user.location}</p>
                        <figure className="image is-4by3">
                          <img src={user.image} alt={user.username} />
                        </figure>
                      </div>
                      <p>{'Age: ' + user.age}</p>
                      <p>{'Bio: ' + user.bio}</p>
                      <p>{'Interests: ' + user.interest}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        })}
      </div>
    </div>
  </section>


}
export default UserList