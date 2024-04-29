// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJUoCXfKCf3HEl3ml3PSKT0xqORFqgEJw",
    authDomain: "msu-denver-bulletin-board.firebaseapp.com",
    projectId: "msu-denver-bulletin-board",
    storageBucket: "msu-denver-bulletin-board.appspot.com",
    messagingSenderId: "404887924497",
    appId: "1:404887924497:web:d6866dc6bed785d3a026b0",
    measurementId: "G-HWBSP4CFJV"
  };
  
// Initialize Firebase
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

// auth.js

const loginForm = document.getElementById('loginForm');

// login.js

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (replace with your actual credentials)
    const validUsername = 'teacher';
    const validPassword = 'securepassword';

    if (email === validUsername && password === validPassword) {
        // Successful login
        console.log('Successfully logged in');
        window.location.href = 'teacher_portal.html';
    } else {
        // Failed login
        console.error('Login failed. Invalid credentials.');
    }
});


function logout() {
    firebase.auth().signOut().then(() => {
        console.log('Successfully logged out');
        // Redirect to the login page after logout (assuming your login page is named index.html)
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Logout failed', error.message);
    });
}


/* alternate method
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect or show the teacher portal page
            console.log('Successfully logged in', userCredential.user);
        })
        .catch((error) => {
            console.error('Login failed', error.message);
        });
});

*/
