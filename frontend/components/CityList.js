import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CityList = () => {

  const [cityData, updateCityData] = useState([])
  const [search, updateSearch] = useState('')



  useEffect(() => {
    axios.get('/api/cities')
      .then(axiosResp => {
        updateCityData(axiosResp.data)
      })
  }, [])

  // console.log(search)
  function searchCity() {  
    const filteredCities = cityData.filter(city => {

      const name = city.name.toLowerCase()
      const text = search.toLowerCase()
      return name.includes(text)
    })

    return filteredCities
  }

  return <section className="section">
    <div className="container">
      <input
        className="input"
        placeholder="search"
        onChange={(event) => updateSearch(event.target.value)}
        value={search}
      />
      {/* <button className="button">
            Search
      </button> */}
    </div>

    <div className="container">
      <div className="columns is-multiline is-mobile">
        {searchCity().map((city, index) => {
          return <div key={index} className="column is-one-third-desktop is-half-tablet is-half-mobile">
            <Link to={`/cities/${city.name}`}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <div className="card-image">
                        <p className="title is-4">{city.name}</p>
                        <p>{city.country}</p>
                        <figure className="image is-4by3">
                          <img src={city.image} alt={city.name} />
                        </figure>
                      </div>
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

export default CityList