import firebase from "firebase/app";
import "firebase/analytics"

const firebaseConfig =  {
    apiKey: "AIzaSyDAwxui4AMZ8PVUwTx5GKvimQo1KGfJkWg",
    authDomain: "joangoal8-blog.firebaseapp.com",
    projectId: "joangoal8-blog",
    storageBucket: "joangoal8-blog.appspot.com",
    messagingSenderId: "890074015697",
    appId: "1:890074015697:web:a72e20fb802f3ca27362f0",
    measurementId: "G-RM9QD0ESV4"
};

function FirebaseConfiguration() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export default FirebaseConfiguration;