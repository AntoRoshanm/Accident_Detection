// firebase.js
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAJBcdBaRdGF3qQpAZ8W1gTqhqX20IQEck",
  authDomain: "esp32-c256f.firebaseapp.com",
  databaseURL: "https://esp32-c256f-default-rtdb.firebaseio.com",
  projectId: "esp32-c256f",
  storageBucket: "esp32-c256f.appspot.com",
  messagingSenderId: "369949579174",
  appId: "1:369949579174:web:c64f07e84f6ea274faa167",
  measurementId: "G-Q2M3GE50VR"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
