function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "12345") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid login!");
    }
}

function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email !== "" && password !== "") {
        alert("Signup successful!");
        window.location.href = "login.html";
    } else {
        alert("Please enter all fields!");
    }
}