import React, { useState } from 'react';
import SignUpForm from '../components/Auth/SignUpForm';
import SignInForm from '../components/Auth/SignInForm';
import ForgotPasswordForm from '../components/Auth/ForgotPasswordForm';

const AuthPage = () => {
  const [view, setView] = useState('signin');

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <button onClick={() => setView('signin')} disabled={view === 'signin'}>Sign In</button>
        <button onClick={() => setView('signup')} disabled={view === 'signup'}>Sign Up</button>
        <button onClick={() => setView('forgot')} disabled={view === 'forgot'}>Forgot Password</button>
      </div>
      {view === 'signin' && <SignInForm />}
      {view === 'signup' && <SignUpForm />}
      {view === 'forgot' && <ForgotPasswordForm />}
    </div>
  );
};
export default AuthPage; 