import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyDmNu_IK860ehc8mFRQMnAFGTmu1Z3MOmc",
  authDomain: "vue-angusbnb.firebaseapp.com",
  databaseURL: "https://vue-angusbnb.firebaseio.com",
  projectId: "vue-angusbnb",
  storageBucket: "vue-angusbnb.appspot.com",
  messagingSenderId: "716813411611",
  appId: "1:716813411611:web:912c307290936e5f155fbe",
  measurementId: "G-7N0Y8WE53M"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}