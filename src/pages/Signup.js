import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirm) return alert("Passwords don't match");
    await axios.post("http://localhost:5000/api/auth/signup", form);
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} placeholder="Username" required />
      <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <input name="confirm" type="password" onChange={handleChange} placeholder="Re-enter Password" required />
      <button type="submit">Create Account</button>
    </form>
  );
}
export default Signup;