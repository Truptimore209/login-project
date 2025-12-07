import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful!");
      window.location.href = "dashboard.html"; 
    })
    .catch((error) => {
      alert(error.message);
    });
});