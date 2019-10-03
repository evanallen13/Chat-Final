import React from 'react';
import styled from 'styled-components'
import * as firebase from 'firebase';

const MessageBlob = (props) =>{
    return(
        ( props.User === firebase.auth().currentUser.displayName ?
            <UserMessage>
                <h4>{date(props.Time)}</h4>
                <BlobUser>
                    {props.Message}
                </BlobUser>
            </UserMessage> :
            <NonUserMessage>
                <h4>{props.User} {date(props.Time)}</h4>
                <BlobNonUser>{props.Message}</BlobNonUser>
            </NonUserMessage>
        )
    )
}
const date = (time) =>{
    const day = new Date(time.seconds * 1000)
    const hour = day.getHours() >= 12 ? day.getHours() - 12 : day.getHours()
    const min = day.getMinutes() < 10 ? `0${day.getMinutes()}` : day.getMinutes()
    const ampm = day.getHours() >= 12 ? 'pm' : 'am'
    return `${hour}:${min}${ampm}`
}

const UserMessage = styled.div`
    float : right;
    margin : 5px 5px 5px 5px;
    color : white;
    text-align : start;
    h4{
        margin : 0;
        margin-left : 10px;
        font-size : 15px;
    }
`

const BlobUser = styled.div`
    background-color : 	#5fc9f8;
    color : white;
    border-radius : 5px;
    padding : 5px 5px 5px 5px
    width : 50vw;
    max-width : 390px;
    overflow : wrap;
    overflow-wrap : break-word;
`
const NonUserMessage = styled.div`
    float : left;
    width : 50%
    margin : 5px 5px 5px 5px;
    color : white;
    text-align : start;
    h4{
        margin : 0;
        margin-left : 10px;
        font-size : 15px;
    }
`
const BlobNonUser = styled.div`
    background-color : 	#F5F5F5;
    color : black;
    border-radius : 5px;
    padding : 5px 5px 5px 5px
    width : 50vw;
    max-width : 390px;
    overflow : wrap;
    overflow-wrap : break-word;
`

export default MessageBlob;