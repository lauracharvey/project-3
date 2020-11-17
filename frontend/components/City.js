import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { isCreator } from '../lib/auth'


const City = (props) => {
  const [city, updateCity] = useState({})
  const [text, updateText] = useState('')

  const cityName = props.match.params.cityName
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios.get(`/api/cities/${cityName}`)
      .then(resp => {
        const data = resp.data
        updateCity(data)
      })
  }, [])

  if (!city.name) {
    return <div className="section">
      <div className="container">
        <div className="title">
          Loading ...
        </div>
      </div>
    </div>
  }


  // delete city
  function handleDelete() {
    axios.delete(`/api/cities/${cityName}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        props.history.push('/cities')
      })
  }

  // comments section
  function handleComment() {
    axios.post(`/api/cities/${cityName}/comments`, { text }, {
      headers: { Authorization: `Bearer ${token}` }

    })
      .then(resp => {
        updateText('')
        updateCity(resp.data)
      })

  }

  function handleDeleteComment(commentId) {
    axios.delete(`/api/cities/${cityName}/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        updateCity(resp.data)
      })
  }

  return <div>
    <div className="section">
      <div className="container">


        <img src={city.image} alt={city.name} />
        <h1 className="title">{city.name}</h1>
        <h2 className="subtitle">{city.country}</h2>
        <h2 className="subtitle">{city.bio}</h2>


        {token && city && isCreator(city.user._id) && < button className="button is-dark" onClick={handleDelete}>
          Remove City
        </button>}
        {token && city && isCreator(city.user._id) && < Link className="button is-primary" to={`/cities/edit-city/${cityName}`}>
          Edit City
        </Link>}
        {token && <Link className="button is-dark" to={`/cities/${city.name}/users`}>
          Chat to Users in {city.name}
        </Link>}
        <div>
          <br />
          <br />
        </div>
        {/*show comments */}

        {/* this will prevent breaking when loading checks if is any comments */}
        {city.comments && city.comments.map(comment => {
          // console.log(comment)

          return <article key={comment._id} className="media">

            <figure className="media-right">
              <p className="image is-64x64">
                <img src={comment.user.image} />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p className="subtitle">
                  <strong> {comment.user.username} </strong>
                  {/* <small  className="media-left"> { comment.createdAt} </small>  */}
                  <br />
                  {comment.text} </p>
              </div>
            </div>
            {isCreator(comment.user._id) && <div className="media-right">
              <button
                className="delete"
                onClick={() => handleDeleteComment(comment._id)}>
              </button>
            </div>}

            {isCreator(comment.user._id) && <Link className="button is-small" to={`/cities/${cityName}/comments/${comment._id}`}>
              Edit 🖊️
            </Link>}
          </article>
        })}

        {/*post comments */}
        <article className="media">
          <div className="media-content">
            <div className="field">
              <p className="control">
                <textarea
                  className="textarea"
                  placeholder="Make a comment.."
                  onChange={event => updateText(event.target.value)}
                  value={text}>
                  {text}
                </textarea>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button
                  onClick={handleComment}
                  className="button is-info">
                  Send
                </button>
              </p>
            </div>
          </div>
        </article>
      </div>

    </div >


  </div >
}

export default City




