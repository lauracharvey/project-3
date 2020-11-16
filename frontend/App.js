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
import EditComment from './components/EditComment'
import AddCity from './components/AddCity'
import EditCity from './components/EditCity'
import UserListByCity from './components/UserListByCity'
import UpdateUserProfile from './components/UpdateUserProfile'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cities" component={cityList} />
      <Route exact path="/cities/:cityName" component={City} />
      <Route exact path="/cities/add-city" component={AddCity} />
      <Route exact path="/cities/edit-city/:cityId" component={EditCity} />
      <Route exact path="/cities/:cityId/comments/:commentId" component={EditComment} />
      <Route exact path="/cities/:cityName/users" component={UserListByCity}/>
      <Route exact path="/users" component={UserList} />
      <Route exact path="/user/:userId" component={UserProfile} />
      <Route exact path="/user/:userId/update" component={UpdateUserProfile} />

    </Switch>
  </BrowserRouter>
}

export default App