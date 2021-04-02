import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAF1NSKN3UChNh1yS8stjwZ9p09PoRUZUA',
  authDomain: 'todo-react-app-4f3fc.firebaseapp.com',
  databaseURL: 'https://todo-react-app-4f3fc-default-rtdb.firebaseio.com',
  projectId: 'todo-react-app-4f3fc',
  storageBucket: 'todo-react-app-4f3fc.appspot.com',
  messagingSenderId: '702142302877',
  appId: '1:702142302877:web:02693246a14ec090aea274',
  measurementId: 'G-TH83M92BT1'
});

const db = firebaseApp.firestore();

export { db };
