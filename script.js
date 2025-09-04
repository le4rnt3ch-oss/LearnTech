const loginPage = document.getElementById('loginPage');
const mainApp = document.getElementById('mainApp');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginError = document.getElementById('loginError');

loginBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === 'student' && password === '1234') {
    loginPage.classList.remove('active');
    mainApp.classList.add('active');
    loginError.textContent = '';
  } else {
    loginError.textContent = 'Invalid credentials';
  }
});

logoutBtn.addEventListener('click', () => {
  mainApp.classList.remove('active');
  loginPage.classList.add('active');
});

// Profile dropdown toggle
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');

profileBtn.addEventListener('click', () => {
  profileDropdown.classList.toggle('active');
});

document.addEventListener('click', e => {
  if(!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
    profileDropdown.classList.remove('active');
  }
});

// Quarter toggles
document.querySelectorAll('.quarter-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const list = button.nextElementSibling;
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
  });
});
