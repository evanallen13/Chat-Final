import React, {useState} from 'react';
import Chat from './components/chat'
import Login from './components/login'
import * as firebase from 'firebase';
import './App.css';

function App() {
  const [ loggedIn , setLoggedIn ] = useState(false)
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  });
  return (
    <div className="App">
      {
        ( loggedIn ?
        <Chat></Chat> : <Login></Login>
        )}
    </div>
  );
}

export default App;
