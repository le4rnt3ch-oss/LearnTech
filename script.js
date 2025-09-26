<body>
  <!-- Login form -->
  <div id="login-box">
    <h2>TechTuro Login</h2>
    <input type="text" id="username" placeholder="Username e.g., TechTuro">
    <input type="password" id="password" placeholder="Password e.g., 12345">
    <button onclick="login()">Login</button>
    <p>Demo credentials: TechTuro / 12345</p>
  </div>

  <!-- Protected content -->
  <div id="content" style="display:none;">
    <h1>Welcome to TechTuro!</h1>
    <p>This is your learning platform where you can explore modules, games, etc.</p>
  </div>

  <script src="script.js"></script>
</body>
