import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCkQnFldE7SdRO-vNvM-UAKwP8UK969jw8',
  authDomain: 'workouts-58f9c.firebaseapp.com',
  projectId: 'workouts-58f9c',
  storageBucket: 'workouts-58f9c.appspot.com',
  messagingSenderId: '230077035921',
  appId: '1:230077035921:web:ced8c7db8fee051942d630',
  //measurementId: "G-1SXR2240TH"
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
