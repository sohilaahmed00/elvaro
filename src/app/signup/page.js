'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup, loading, setError } = useAuth();
  const [localError, setLocalError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    setError(null);

    // Front-end validations
    if (!name || !email || !password || !confirmPassword) {
      setLocalError('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setLocalError('Passwords do not match.');
      return;
    }

    const res = await signup(name, email, password);
    if (!res.success) {
      setLocalError(res.error || 'Registration failed.');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={bgGlowLeft}></div>
      <div style={bgGlowRight}></div>
      
      <div style={cardStyle}>
        <div style={cardHeaderStyle}>
          <h1 style={titleStyle}>Create Account</h1>
          <p style={subtitleStyle}>Join ELVARO and design premium structures</p>
        </div>

        {localError && (
          <div style={errorBadgeStyle}>
            <span style={errorIconStyle}>⚠️</span>
            <span>{localError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <label style={labelStyle}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              style={inputStyle}
              required
            />
          </div>

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? (
              <span style={spinnerContainer}>
                <span style={spinnerStyle}></span> Creating Account...
              </span>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <div style={cardFooterStyle}>
          <p style={footerText}>
            Already have an account?{' '}
            <Link href="/login" style={linkStyle}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// STYLING SYSTEM (Matching Login Page)
const containerStyle = {
  minHeight: '100vh',
  width: '100%',
  backgroundColor: '#090d16',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '120px 20px 80px',
  position: 'relative',
  overflow: 'hidden',
};

const bgGlowLeft = {
  position: 'absolute',
  top: '15%',
  left: '10%',
  width: '350px',
  height: '350px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
  filter: 'blur(50px)',
  zIndex: 1,
};

const bgGlowRight = {
  position: 'absolute',
  bottom: '10%',
  right: '10%',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
  filter: 'blur(60px)',
  zIndex: 1,
};

const cardStyle = {
  width: '100%',
  maxWidth: '480px',
  background: 'rgba(15, 23, 42, 0.65)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderRadius: '24px',
  border: '1px solid rgba(167, 139, 250, 0.15)',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  padding: '40px',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
};

const cardHeaderStyle = {
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '2.25rem',
  fontWeight: '800',
  color: '#fff',
  marginBottom: '8px',
  letterSpacing: '-0.5px',
  background: 'linear-gradient(to right, #ffffff, #a78bfa)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const subtitleStyle = {
  fontSize: '0.95rem',
  color: '#94a3b8',
  lineHeight: '1.5',
};

const errorBadgeStyle = {
  background: 'rgba(239, 68, 68, 0.12)',
  border: '1px solid rgba(239, 68, 68, 0.25)',
  borderRadius: '12px',
  padding: '12px 16px',
  color: '#f87171',
  fontSize: '0.875rem',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  lineHeight: '1.4',
};

const errorIconStyle = {
  fontSize: '1rem',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const labelStyle = {
  fontSize: '0.85rem',
  fontWeight: '600',
  color: '#cbd5e1',
  letterSpacing: '0.5px',
};

const inputStyle = {
  backgroundColor: 'rgba(9, 13, 22, 0.7)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
  padding: '12px 16px',
  fontSize: '0.95rem',
  color: '#fff',
  outline: 'none',
  transition: 'all 0.2s ease',
  width: '100%',
};

const buttonStyle = {
  backgroundColor: '#a78bfa',
  color: '#090d16',
  border: 'none',
  borderRadius: '10px',
  padding: '14px',
  fontSize: '1rem',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: '0 4px 20px rgba(167, 139, 250, 0.25)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
};

const spinnerContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const spinnerStyle = {
  width: '18px',
  height: '18px',
  border: '2px solid rgba(9, 13, 22, 0.3)',
  borderTop: '2px solid #090d16',
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',
};

const cardFooterStyle = {
  textAlign: 'center',
  marginTop: '10px',
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  paddingTop: '20px',
};

const footerText = {
  fontSize: '0.9rem',
  color: '#94a3b8',
};

const linkStyle = {
  color: '#a78bfa',
  textDecoration: 'none',
  fontWeight: '600',
  transition: 'color 0.2s ease',
};
