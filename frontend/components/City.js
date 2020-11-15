import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { isCreator } from '../lib/auth'


const City = (props) => {
  const [city, updateCity] = useState({})
  const [text, updateText] = useState('')

  const cityId = props.match.params.cityId
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios.get(`/api/cities/${cityId}`)
      .then(resp => {
        const data = resp.data
        // console.log(data)
        updateCity(data)
      })
  }, [])

  if (!city._id) {
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
    axios.delete(`/api/cities/${cityId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        props.history.push('/cities')
      })
  }



  // comments section
  function handleComment() {
    axios.post(`/api/cities/${city._id}/comments`, { text }, {
      headers: { Authorization: `Bearer ${token}` }

    })
      .then(resp => {
        updateText('')
        updateCity(resp.data)
      })

  }

  function handleDeleteComment(commentId) {
    axios.delete(`/api/cities/${city._id}/comments/${commentId}`, {
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


        {token && <button className="button is-dark" onClick={handleDelete}>
          Remove City
        </button>}
        {token && <Link className="button is-primary" to={`/cities/edit-city/${city._id}`}>
          Edit City
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

            {isCreator(comment.user._id) && <Link className="button is-small" to={`/cities/${city._id}/comments/${comment._id}`}>
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

    </div>


  </div>
}

export default City




