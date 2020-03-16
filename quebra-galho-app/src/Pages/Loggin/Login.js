import React, { useState } from 'react'
import firebase from '../../Utils/firebase'
import { withRouter } from 'react-router-dom'
import { 
  Input,
  Button,
  Grid
} from '@material-ui/core'

function Login(props){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () =>{
    try{
      await firebase.login(email, password)
      props.history.replace('/home')
    }catch(error){
      alert(error.message)
    }
  }

  return(
      <Grid
        container
        direction = 'column'
        justify = 'center'
        alignItems = 'center'
      >
        <Grid item sm={12}>
          <Input
            onChange={e=> setEmail(e.target.value)} 
            type='text' 
            id='email' 
            name='email' 
            placeholder='email'
            value={email} 
            autoFocus
          />
        </Grid>
        <Grid item sm>
          <Input
            onChange={e=> setPassword(e.target.value)} 
            type='password' 
            id='password' 
            name='password' 
            placeholder='senha'
            value={password}
          />
        </Grid>
        <Grid item sm>
          <Button
            onClick={login}
          >Entrar</Button>
        </Grid>
      </Grid>
  )

}

export default withRouter(Login)