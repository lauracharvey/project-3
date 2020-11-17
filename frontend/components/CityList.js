import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const CityList = () => {

  const [cityData, updateCityData] = useState([])
  const [search, updateSearch] = useState('')

  useEffect(() => {
    axios.get('/api/cities')
      .then(axiosResp => {
        updateCityData(axiosResp.data)
      })
  }, [])

  function searchCity() {
    const filteredCities = cityData.filter(city => {
      const name = city.name.toLowerCase()
      const text = search.toLowerCase()
      return name.includes(text)
    })
    return filteredCities
  }

  return <main className="citiesMain">
    <header>
      <Navbar />
    </header>
    <section className="searchSection">
      <label>Search</label>
      <input
        placeholder="find your city"
        onChange={(event) => updateSearch(event.target.value)}
        value={search}
      />
    </section>
    <section className="cardsSection">
      {searchCity().map((city, index) => {
        return <div key={index} className="cardOuter">
          <Link to={`/cities/${city.name}`}>
            <div className="imageContainer">
              <img src={city.image} alt={city.name}/>
            </div>
            
            <h2>{city.name}</h2>
            <h3>{city.country}</h3>
          </Link>
        </div>

      })}
    </section>
  </main>
}

export default CityList