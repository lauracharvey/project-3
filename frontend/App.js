import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserList from './components/UserList'

import './styles/style.scss'
import 'bulma'

import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'

// For environment varibles
console.log(process.env.hello)

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/users" component={UserList} />
    </Switch>
  </BrowserRouter>
}

export default App