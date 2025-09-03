// Simple credentials for testing
const validUser = {
  username: "learntech",
  password: "1234"
};

// Profile dropdown toggle
document.addEventListener('DOMContentLoaded', () => {
  const profileBtn = document.querySelector('.profile-btn');
  const dropdown = document.querySelector('.dropdown');

  profileBtn.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!profileBtn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
});
