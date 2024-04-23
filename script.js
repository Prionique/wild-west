
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getDatabase, get, ref, set, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBypQ7GYKZlSx2zhFbJjnb_g2-x0dHpEnk",
    authDomain: "wild-west-52f95.firebaseapp.com",
    databaseURL: "https://wild-west-52f95-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wild-west-52f95",
    storageBucket: "wild-west-52f95.appspot.com",
    messagingSenderId: "273097408937",
    appId: "1:273097408937:web:1244ebd177ae0505ce04b8",
    measurementId: "G-FKH9LRG2X5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const pib = document.getElementById("pib").value.trim().replace(/\s+/g, '-'); // Replace spaces with dashes
    const time = document.getElementById("time").value.trim();
    const count = document.getElementById("count").value.trim();
    const mail = document.getElementById("mail").value.trim();

    set(ref(db, `${time}/${pib}`), {
        count: count,
        mail: mail
    })
    document.getElementById("m").style.display = 'none';
    document.getElementById("video").style.display = 'block';

})