import React, { useState } from 'react';

const SignInForm = () => {
  const [form, setForm] = useState({
    email: '',
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

  const handleSignIn = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === form.email && u.password === form.password);
    if (!user) {
      alert('Invalid email or password');
      return;
    }
    if (form.otp !== generatedOtp) {
      alert('Invalid OTP');
      return;
    }
    alert('Sign in successful!');
  };

  return (
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="button" onClick={sendOtp} disabled={otpSent}>Send OTP</button>
      <input name="otp" placeholder="Enter OTP" value={form.otp} onChange={handleChange} required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm; 