import React, { Component } from 'react'
import firebase from 'firebase'

export default class SignIn extends Component {
 
 signIn =()=>{
     firebase.auth().signInWithEmailAndPassword(this.props.email,this.props.password).then((user)=>{
         console.log(user)

     })
     }
 
 
    render() {
    return (
      <div>
        <h1>SIGN IN</h1>
        <button onClick={this.signIn}>Sign in</button>
      </div>
    )
  }
}
