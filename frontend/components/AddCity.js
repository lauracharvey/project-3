
import React, { useState } from 'react'
import axios from 'axios'




const AddCity = (props) => {

  const [addFormData, updateAddFormData] = useState({
    name: '',
    country: '',
    bio: '',
    image: ''
  })

  const inputFields = ['name', 'country', 'bio', 'image']

  function handleChange(event) {
    console.log('handleChange')
    // overwriting the field we've updated
    const data = {
      ...addFormData,

      [event.target.name]: event.target.value
    }
    // console.log(data)
    updateAddFormData(data)
  }
  function handleSubmit(event) {
    console.log('handleSubmit')
    event.preventDefault()
    const token = localStorage.getItem('token')
    axios.post('/api/cities', addFormData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        console.log(props.history.push('/cities'))
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
            name={field}
            value={addFormData[field]}
            onChange={handleChange}
          />
        </div>
      })}

      <button>Submit</button>

    </form>

  </>


}

export default AddCity