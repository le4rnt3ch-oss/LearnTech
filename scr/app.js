// Save this as src/App.js in your React project

import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:5000/api';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [profile, setProfile] = useState(null);

  const saveToken = (token) => {
    localStorage.setItem('token', token);
  };

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${API_BASE}/${isLogin ? 'login' : 'signup'}`;
    const payload = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.ok) {
        saveToken(data.token);
        setMessage(`Welcome ${data.user.name}!`);
        setProfile(data.user);
      } else {
        setMessage(data.msg || 'Error occurred');
      }
    } catch (error) {
      setMessage('Network error');
    }
  };

  const fetchProfile = async () => {
    const token = getToken();
    if (!token) return;

    try {
      const res = await fetch(`${API_BASE}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setProfile(data);
      else setMessage(data.msg);
    } catch {
      setMessage('Failed to fetch profile');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      {profile ? (
        <div>
          <h2>Welcome, {profile.name}</h2>
          <p>Email: {profile.email}</p>
          <p>XP: {profile.xp}</p>
          <p>Badges: {profile.badges.join(', ') || 'None'}</p>
          <p>Points: {profile.points}</p>
          <p>Level: {profile.level}</p>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              setProfile(null);
              setMessage('Logged out');
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ width: '100%', marginBottom: 10, padding: 8 }}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', marginBottom: 10, padding: 8 }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', marginBottom: 10, padding: 8 }}
            />
            <button type="submit" style={{ width: '100%', padding: 10 }}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>
          <p
            style={{ marginTop: 10, cursor: 'pointer', color: 'blue' }}
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
            }}
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Login'}
          </p>
          {message && <p>{message}</p>}
        </>
      )}
    </div>
  );
}

export default App;
