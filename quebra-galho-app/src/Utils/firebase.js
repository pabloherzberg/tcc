import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzN34VWvJHjifg5oouKgRv5pYu-7C4zYg",
  authDomain: "quebra-galho-tcc.firebaseapp.com",
  databaseURL: "https://quebra-galho-tcc.firebaseio.com",
  projectId: "quebra-galho-tcc",
  storageBucket: "quebra-galho-tcc.appspot.com",
  messagingSenderId: "735286956235",
  appId: "1:735286956235:web:0ca400e0af6f8694870b4e",
  measurementId: "G-WR7WRW0R1Q"
}

class Firebase{
  constructor(){
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db = app.firestore()    
  }

  login(email, password){
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.auth.signOut()
  }

  async register(name, email, password){
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName : name
    })
  }

  isInitialized(){
    return new Promise(resolve =>{
      this.auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUserName(){
    return this.auth.currentUser && this.auth.currentUser.displayName
  }
}

export default new Firebase()