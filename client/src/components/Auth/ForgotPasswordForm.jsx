import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [form, setForm] = useState({
    email: '',
    otp: '',
    newPassword: '',
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

  const handleReset = (e) => {
    e.preventDefault();
    if (form.otp !== generatedOtp) {
      alert('Invalid OTP');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === form.email);
    if (userIndex === -1) {
      alert('Email not found');
      return;
    }
    users[userIndex].password = form.newPassword;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Password reset successful!');
  };

  return (
    <form onSubmit={handleReset}>
      <h2>Forgot Password</h2>
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <button type="button" onClick={sendOtp} disabled={otpSent}>Send OTP</button>
      <input name="otp" placeholder="Enter OTP" value={form.otp} onChange={handleChange} required />
      <input name="newPassword" type="password" placeholder="New Password" value={form.newPassword} onChange={handleChange} required />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPasswordForm; 