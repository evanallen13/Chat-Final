import React, { useState } from 'react';
import * as firebase from 'firebase';
import './chat.css'

const Chat = () => {
    const [ mes, setMes ] = useState('')
    const [ messages, setMessages ] = useState([])

    const addMessage = () => {
        console.log('hello')
        let prev = messages
        messages.push(mes)
        setMessages(prev)
        setMes('')
    }

    const signOut = () => {
        firebase.auth().signOut().then(function() {
            console.log('Sign Out')
          }).catch(function(error) {
            console.log('Not Signed out')
          });
    }

    return (
        <div>
            <div id="mesBox">
                {
                    messages.map((message) => 
                        <h4 key={message}>{message}</h4>
                    )
                }
            </div>
            <input 
                id="mesInput" 
                type='text' 
                placeholder="Enter Message"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
            ></input>
            <button id="submitBtn" type="button" onClick={() => addMessage()}
            >Send</button>
            <button onClick ={() => signOut()}>Log Out</button>
        </div>

)}


export default Chat;