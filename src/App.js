import React, { useState } from 'react';

export default function FacebookLoginApp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password');
    }
  };

  if (loggedIn) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20vh' }}>
        <h1>Welcome, {username}!</h1>
        <p>You have successfully logged in.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Facebook</h2>
        <input
          type="text"
          placeholder="Email or Phone Number"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Log In
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
  },
  loginBox: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    textAlign: 'center',
  },
  title: {
    color: '#1877f2',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
    border: '1px solid #ddd',
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#1877f2',
    color: '#fff',
    fontSize: 16,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
};
