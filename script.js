<body>
  <!-- Login form -->
  <div id="login-box">
    <h2>TechTuro Login</h2>
    <input type="text" id="username" placeholder="Username e.g., admin">
    <input type="password" id="password" placeholder="Password e.g., 1234">
    <button onclick="login()">Login</button>
    <p>Demo credentials: admin / 1234</p>
  </div>

  <!-- Protected content -->
  <div id="content" style="display:none;">
    <h1>Welcome to LearnTech!</h1>
    <p>This is your learning platform where you can explore modules, quizzes, etc.</p>
  </div>

  <script src="script.js"></script>
</body>
