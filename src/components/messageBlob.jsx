import React from 'react';
import styled from 'styled-components'
import * as firebase from 'firebase';

const MessageBlob = (props) =>{
    return(
        ( props.User === firebase.auth().currentUser.displayName ?
            <BlobUser>{props.User} : {props.Message}</BlobUser> :
            <BlobNonUser>{props.User} : {props.Message}</BlobNonUser>
        )
    )
}

const BlobUser = styled.div`
    background-color : 	#5fc9f8;
    color : white;
    margin : 5px 5px 5px 5px;
    border-radius : 5px;
    padding : 5px 5px 5px 5px
    width : 50%;
    float : left;
    overflow : wrap;
    overflow-wrap : break-word;
`
const BlobNonUser = styled.div`
    background-color : 	#53d769;
    color : white;
    margin : 5px 5px 5px 5px;
    border-radius : 5px;
    padding : 5px 5px 5px 5px
    width : 50%;
    float : right;
    overflow : wrap;
    overflow-wrap : break-word;
`

export default MessageBlob;