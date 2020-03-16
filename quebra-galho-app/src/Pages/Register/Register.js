import React, { useState } from 'react'
import firebase from '../../Utils/firebase'
import { 
  Input,
  Button,
  Grid
} from '@material-ui/core'

function Register(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const register = async () => {
    try{
      await firebase.register(name, email, password)
    }catch(error){
      alert(error.message)
    }
  }
  return(
    <Grid>
      <Grid>
        <Input 
          type='text' 
          id='name' 
          name='name'
          value={name}
          placeholder='Nome'
          onChange={e=> setName(e.target.value)}  
        />
      </Grid>
      <Grid>
        <Input 
          type='text' 
          id='email' 
          name='email'
          value={email}
          placeholder='Email'
          onChange={e=> setEmail(e.target.value)}  
        />
      </Grid>
      <Grid>
        <Input 
          type='password' 
          id='password' 
          name='password'
          value={password}
          placeholder='Senha'
          onChange={e=> setPassword(e.target.value)}  
        />
      </Grid>
      <Grid>
        <Button
          onClick={register}
        >Enviar</Button>
      </Grid>
    </Grid>
  )
}

export default Register