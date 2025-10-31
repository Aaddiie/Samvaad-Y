import React, { useState } from 'react';

const SignUpForm = () => {
  const [form, setForm] = useState({
    name: '',
    number: '',
    email: '',
    address: '',
    password: '',
    otp: '',
  });
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setOtpSent(true);
    alert(`Mock OTP sent: ${otp}`);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (form.otp !== generatedOtp) {
      alert('Invalid OTP');
      return;
    }
    // Save user to localStorage (mock)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful!');
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="number" placeholder="Number" value={form.number} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="button" onClick={sendOtp} disabled={otpSent}>Send OTP</button>
      <input name="otp" placeholder="Enter OTP" value={form.otp} onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm; 