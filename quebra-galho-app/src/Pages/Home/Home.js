import React, {useState, useEffect} from 'react'
import firebase from '../../Utils/firebase'

function Home(props) {

  if(!firebase.getCurrentUserName()){
    alert('Faça o login')
    props.history.replace('/entrar')
    return null
  }

  return(
  <h1>oi</h1>
  )
}

export default Home