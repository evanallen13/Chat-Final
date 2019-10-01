import React from 'react';
import * as firebase from 'firebase';
import './login.css'
import '../Fire'

const Login = (props) =>{
    const Auth = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            console.log('Logged in')
        })
        .catch((result) => {
            console.log(result)
        })
    }
    return(
        <div id="loginDiv">
            <h1>Login</h1>
            <button onClick={() => Auth()}>Google Login</button>
        </div>
    )
}



export default Login;