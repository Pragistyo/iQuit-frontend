import fireapp from '@firebase/app';
import '@firebase/firestore';
import '@firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBCs2gd1l2vlZR0KBnUNVZ6SZRGam-J7S8",
  authDomain: "i-quit-e703a.firebaseapp.com",
  databaseURL: "https://i-quit-e703a.firebaseio.com",
  projectId: "i-quit-e703a",
  storageBucket: "i-quit-e703a.appspot.com",
  messagingSenderId: "1018168285781"
};

fireapp.initializeApp(firebaseConfig);
const db = fireapp.database();

export default db;
