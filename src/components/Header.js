'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link href="/" style={logoLinkStyle}>
          <div style={logoStyle}>ELVARO</div>
        </Link>
        
        <nav style={navStyle}>
          <Link href="/" style={linkStyle}>HOME</Link>
          <Link href="/about" style={linkStyle}>ABOUT</Link>
          <Link href="/services" style={linkStyle}>SERVICES</Link>
          <Link href="/projects" style={linkStyle}>PROJECTS</Link>
          <Link href="/ssg" style={linkStyle}>SSG</Link>
          <Link href="/ssr" style={linkStyle}>SSR</Link>
          <Link href="/isr" style={linkStyle}>ISR</Link>
          <Link href="/csr" style={linkStyle}>CSR</Link>
          <Link href="/products" style={linkStyle}>PRODUCTS</Link>
          <Link href="/contact" style={linkStyle}>CONTACT</Link>
        </nav>

        <div style={actionsStyle}>
          {user ? (
            <div style={userContainerStyle}>
              <span style={welcomeStyle}>
                Hi, <span style={nameHighlightStyle}>{user.name.split(' ')[0]}</span>
              </span>
              <button onClick={logout} style={logoutButtonStyle}>
                Logout
              </button>
            </div>
          ) : (
            <div style={authGroupStyle}>
              <Link href="/login" style={loginLinkStyle}>
                Login
              </Link>
              <Link href="/signup" style={signupButtonStyle}>
                Sign Up
              </Link>
            </div>
          )}
          <Link href="/start-project" style={ctaButtonStyle}>Start Project</Link>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  backgroundColor: 'rgba(15, 23, 42, 0.9)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  color: '#fff',
  padding: '1.25rem 2rem',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1400px',
  margin: '0 auto',
};

const logoLinkStyle = {
  textDecoration: 'none',
};

const logoStyle = {
  fontSize: '1.6rem',
  fontWeight: '900',
  color: '#a78bfa',
  letterSpacing: '2px',
  textShadow: '0 0 15px rgba(167, 139, 250, 0.3)',
  transition: 'transform 0.2s ease',
};

const navStyle = {
  display: 'flex',
  gap: '1.25rem',
};

const linkStyle = {
  fontSize: '0.8rem',
  fontWeight: '700',
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'color 0.2s ease, text-shadow 0.2s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px',
};

const actionsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
};

const authGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

const loginLinkStyle = {
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '#cbd5e1',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};

const signupButtonStyle = {
  backgroundColor: 'rgba(167, 139, 250, 0.1)',
  border: '1px solid rgba(167, 139, 250, 0.3)',
  color: '#a78bfa',
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem',
  fontSize: '0.875rem',
  fontWeight: '600',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
};

const userContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  background: 'rgba(255, 255, 255, 0.03)',
  padding: '0.35rem 0.75rem 0.35rem 1rem',
  borderRadius: '9999px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
};

const welcomeStyle = {
  fontSize: '0.85rem',
  color: '#94a3b8',
};

const nameHighlightStyle = {
  fontWeight: '700',
  color: '#f8fafc',
};

const logoutButtonStyle = {
  background: 'rgba(239, 68, 68, 0.15)',
  border: '1px solid rgba(239, 68, 68, 0.3)',
  color: '#f87171',
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textTransform: 'uppercase',
};

const ctaButtonStyle = {
  backgroundColor: '#a78bfa',
  color: '#0f172a',
  padding: '0.5rem 1.25rem',
  borderRadius: '0.375rem',
  fontSize: '0.875rem',
  fontWeight: '700',
  textDecoration: 'none',
  transition: 'all 0.2s ease',
  boxShadow: '0 4px 14px rgba(167, 139, 250, 0.3)',
};
