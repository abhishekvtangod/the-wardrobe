import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSvdjm5Ama4qDeoO2lj1qDAksTRYOhStI",
    authDomain: "the-wardrobe-db-bbdb6.firebaseapp.com",
    databaseURL: "https://the-wardrobe-db-bbdb6.firebaseio.com",
    projectId: "the-wardrobe-db-bbdb6",
    storageBucket: "the-wardrobe-db-bbdb6.appspot.com",
    messagingSenderId: "644191038802",
    appId: "1:644191038802:web:a8d295b8b05a6e3f2d9e8b",
    measurementId: "G-E4SMWYFWPG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;