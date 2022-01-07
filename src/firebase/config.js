import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD8jNaK6sbYL1rf4ANehjM1l_vAf58UzAo",
    authDomain: "reactolxclone-d969d.firebaseapp.com",
    projectId: "reactolxclone-d969d",
    storageBucket: "reactolxclone-d969d.appspot.com",
    messagingSenderId: "376607552380",
    appId: "1:376607552380:web:ba0c951ba337018063aaf9",
    measurementId: "G-CHXWQGJ5TJ"
  };


export default firebase.initializeApp(firebaseConfig)