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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth){
        return;
    } 
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(err){
            console.log("Error creating user\nError:" ,err.message);
        }
    }
    return userRef; 
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
    });
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    const transformedCollections = collectionsSnapshot.docs.map(docSnapshot => {
        const {title, items} = docSnapshot.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id : docSnapshot.id,
            title,
            items
        }
    });

    return transformedCollections.reduce((accumulator,collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;