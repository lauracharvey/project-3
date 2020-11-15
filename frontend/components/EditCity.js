import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EditCity = (props) => {
  const cityId = props.match.params.cityId
  const inputFields = ['name', 'country', 'bio', 'image']

  const [editCityFormData, setEditCityFormData] = useState({
    name: '',
    country: '',
    bio: '',
    image: ''
  })

  useEffect(() => {
    axios.get(`/api/cities/${cityId}`)
      .then(resp => {
        setEditCityFormData(resp.data)
      })
  },[])
  
  function handleChange(event) {
    const data = {
      ...editCityFormData,
      [event.target.name]: event.target.value
    }
    setEditCityFormData(data)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    axios.put(`/api/cities/${cityId}`, editCityFormData , {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        props.history.push('/cities')
      })
  }

  return <>
    <form onSubmit={handleSubmit}>
      {inputFields.map((field, i) => {
        return <div key={i}>
          <label>{field}</label>
          <input
            type="text"
            onChange={handleChange} 
            value={editCityFormData[field]}
            name={field}

          />
        </div>
      })}

      <button>Submit</button>

    </form>
  </>
}

export default EditCity