/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHEnQybwC6X4IyeYthEhH0sHjfUPzQMqE",
    authDomain: "webto-11684.firebaseapp.com",
    projectId: "webto-11684",
    storageBucket: "webto-11684.appspot.com",
    messagingSenderId: "1026972815103",
    appId: "1:1026972815103:web:1bc0e01c58e93fd101c6ca",
    measurementId: "G-54SSZWEJ2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//--------------------FIREBASE END--------------------------------

 */
function updateDateTime() {
    const now = new Date();

    // Get individual components
    const day = now.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'pm' : 'am';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours) as 12 am

    // Build the formatted string
    const formattedDateTime = `${day} ${month} ${year} at ${hours}:${minutes}:${seconds} ${amPm}`;

    // Update the HTML element
    document.getElementById("dateTimeDisplay").textContent = formattedDateTime;
}

// Initial update and then every second
updateDateTime();
setInterval(updateDateTime, 1000); // Update every 1000 milliseconds (1 second)

function black() {
    document.querySelector('.creator').style.backgroundColor = '#000';
    document.querySelector('.black').style.backgroundColor = '#fff';
    document.querySelector('.creator__text--title').style.color = '#fff';
    document.querySelector('.creator__text--title').style.color = '#fff';
    document.querySelector('.creator__text--para').style.color = '#fff';
}

document.querySelector(".black").addEventListener("click", black);

document.classList.add('overlay');
