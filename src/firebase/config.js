import firebase from "firebase/app";
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: "admin-template-cod3r-1bc71.appspot.com",
        messagingSenderId: "427215459444",
        appId: "1:427215459444:web:8d9907b3927f5c99dcad21"
    })
}

// if (!firebase.apps.length) {
//     firebase.initializeApp({
//         apiKey: 'AIzaSyD5WUyqRWiHeMiaJObqAs_T2iQOGZfVLas',
//         authDomain: 'admin-template-cod3r-1bc71.firebaseapp.com',
//         projectId: 'admin-template-cod3r-1bc71',
//         storageBucket: "admin-template-cod3r-1bc71.appspot.com",
//         messagingSenderId: "427215459444",
//         appId: "1:427215459444:web:8d9907b3927f5c99dcad21"
//     })
// }


export default firebase