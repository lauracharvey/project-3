import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserList from './components/UserList'

import './styles/style.scss'
import 'bulma'

import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import City from './components/City'
import cityList from './components/cityList'

// For environment varibles
console.log(process.env.hello)

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cities" component={cityList} />
      <Route exact path="/cities/:cityId" component={City} />
      <Route exact path="/users" component={UserList} />
      <Route exact path="/user/:userId" component={UserProfile} />
    </Switch>
  </BrowserRouter>
}

export default App