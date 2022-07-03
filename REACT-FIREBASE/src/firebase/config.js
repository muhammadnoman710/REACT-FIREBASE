import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA2hmKfHM0hgxF3yB3o5xd3H1VTa30NJHA",
  authDomain: "the-noman-site.firebaseapp.com",
  projectId: "the-noman-site",
  storageBucket: "the-noman-site.appspot.com",
  messagingSenderId: "244854928798",
  appId: "1:244854928798:web:8e687dc369a2c27f27928f"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

const timestamp =firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

