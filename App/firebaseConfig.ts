import * as firebase from 'firebase/app'
import 'firebase/firestore'

const config = { //we get the config from the firebase dashboard
    apiKey: "AIzaSyBaTQ4_NGBSO7Uslq_RWE1yv_Rcon3P5nc",
    authDomain: "arsenal-fan-app-f87dc.firebaseapp.com",
    databaseURL: "https://arsenal-fan-app-f87dc.firebaseio.com",
    projectId: "arsenal-fan-app-f87dc",
    storageBucket: "arsenal-fan-app-f87dc.appspot.com",
    messagingSenderId: "623050288439",
    appId: "1:623050288439:web:10eb20f015f2722d4f3eb2",
    measurementId: "G-3S83RGD0CD"
}

firebase.initializeApp(config)

export default firebase