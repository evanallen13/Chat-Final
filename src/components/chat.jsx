import React, { useState,  useEffect } from 'react';
import * as firebase from 'firebase';
import './chat.css'
import MessageBlob from './messageBlob'
import { readDB, writeDB } from '../Fire'


const Chat = () => {
    const [ mes, setMes ] = useState('')
    const [ messages, setMessages ] = useState([])

    const addMessage = async() => {
        const result = await readDB()
        setMessages(result)
    }

    const signOut = () => {
        firebase.auth().signOut().then(function() {
            console.log('Sign Out')
          }).catch(function(error) {
            console.log('Not Signed out')
          });
    }

    useEffect(() => {
        addMessage()
    }, [])

    return (
        <div>
            <div id="mesBox">
                {
                    messages.map((message) => 
                        <MessageBlob 
                            key={message[0]}
                            Time={message[0]}
                            User={message[1]}
                            Message={message[2]}
                        ></MessageBlob>
                    )
                }
            </div>
            <div id='mesForm'>
                <button id='logOut' onClick ={() => signOut()}>LogOut</button>
                <input 
                id="mesInput" 
                type='text' 
                placeholder="Enter Message"
                value={mes}
                onChange={(e) => setMes(e.target.value)}
                ></input>
                <button id="submitBtn" type="button" onClick={() => writeDB(mes)}
                >Send</button>
            </div>
            
        </div>

)}



export default Chat;