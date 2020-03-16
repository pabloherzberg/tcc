import React from 'react'
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Loggin'

export default function Routes(){
  return(
    <Switch>
      <Redirect
        exact
        from='/'
        to='/home'
      />
      <Route
        exact
        path='/home'
        component={Home}
      />
      <Route
        exact
        path='/cadastrar'
        component={Register}
      />
      <Route
        exact
        path='/entrar'
        component={Login}
      />
    </Switch>
  )
}