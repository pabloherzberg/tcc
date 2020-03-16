import React, { useState, useEffect } from 'react'
import Routes from './routes'
import { Link } from 'react-router-dom'
import firebase from './Utils/firebase'
import Layout from './styled'
import Circular from './styled'
import { Button } from '@material-ui/core'

function App() {

  const [firebaseInitialized, setFirebaseInitilized] = useState(false)

  useEffect(()=>{
    firebase.isInitialized().then(val=>{
      setFirebaseInitilized(val)
    })
  })

  return firebaseInitialized != false ? (
    <Layout>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/cadastrar'>Cadastrar</Link>
        <Link to='/entrar'>entrar</Link>
        <Button onClick={firebase.logout()}>Sair</Button>
      </div>
      <div>
        <Routes/>
      </div>
    </Layout>
  ) : <>< Circular /></>
}

export default App;
