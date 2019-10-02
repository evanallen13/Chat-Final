import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyAkzuxZvb5Ihhw7zUx-DqPDECkVz_hB9wY",
    authDomain: "class-schedule-49726.firebaseapp.com",
    databaseURL: "https://class-schedule-49726.firebaseio.com",
    projectId: "class-schedule-49726",
    storageBucket: "class-schedule-49726.appspot.com",
    messagingSenderId: "412218516403",
    appId: "1:412218516403:web:bf62ddb3a2bcce89bca1c6"
});

export const readDB = async() => {
    let array = []
    const DB = firebase.firestore()
    const MESSAGES = await DB.collection('Messages')
    MESSAGES.orderBy('id')
    const DATA = await MESSAGES.get()
    .then((snap) => {
        snap.forEach(doc => {
            array.push([doc.id,doc.data().User,doc.data().Message])
        })
    })

    return array
}

export const writeDB = (Message) => {
    const User = firebase.auth().currentUser.displayName
    const DB = firebase.firestore()
    const date = new Date()
    const id = String(date)
    const MESSAGES = DB.collection('Messages').doc(id).set({Message,User})
}