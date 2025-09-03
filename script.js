// Simple credentials for testing
const validUser = {
  username: "student",
  password: "1234"
};

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser.username && password === validUser.password) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "main.html"; // redirect to main site
    } else {
      document.getElementById("errorMsg").innerText = "Invalid username or password!";
    }
  });
}

// Protect Main Page
if (window.location.pathname.includes("main.html")) {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}
