import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserList from './components/UserList'

import './styles/style.scss'
import 'bulma'

// For environment varibles
console.log(process.env.hello)

const App = () => {
  return<BrowserRouter>
    <Switch>
      <Route exact path="/users" component={UserList} />
    </Switch>
  </BrowserRouter>
}

export default App