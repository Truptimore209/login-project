import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword }
  from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account Created Successfully!");
      window.location.href = "login.html";
    })
    .catch(error => {
      alert(error.message);
    });
});