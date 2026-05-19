'use client';

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setSubmitted(true);
    
    // Clear form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={containerStyle}>
      <div style={bgGlowLeft}></div>
      <div style={bgGlowRight}></div>

      <div style={contentWrapper}>
        <div style={infoSection}>
          <p style={subtitleStyle}>GET IN TOUCH</p>
          <h1 style={titleStyle}>Let's Build Something Monumental</h1>
          <p style={descStyle}>
            Have a project in mind or want to learn more about ELVARO? Reach out to us. 
            Our team of expert engineers and designers is ready to bring your vision to life.
          </p>

          <div style={contactDetailsList}>
            <div style={detailItem}>
              <span style={iconStyle}>📍</span>
              <div>
                <h4 style={detailTitle}>Global Headquarters</h4>
                <p style={detailText}>124 Elvaro Plaza, Sheikh Zayed Rd, Dubai, UAE</p>
              </div>
            </div>

            <div style={detailItem}>
              <span style={iconStyle}>✉️</span>
              <div>
                <h4 style={detailTitle}>Email Inquiry</h4>
                <p style={detailText}>projects@elvaro-engineering.com</p>
              </div>
            </div>

            <div style={detailItem}>
              <span style={iconStyle}>📞</span>
              <div>
                <h4 style={detailTitle}>Direct Contact</h4>
                <p style={detailText}>+971 4 555 9821 / +971 4 555 9822</p>
              </div>
            </div>
          </div>
        </div>

        <div style={formCardStyle}>
          {submitted ? (
            <div style={successContainer}>
              <div style={successCheckStyle}>✓</div>
              <h2 style={successTitle}>Message Sent!</h2>
              <p style={successText}>
                Thank you for contacting ELVARO. Our engineering consultancy team will review your message and get back to you within 24 hours.
              </p>
              <button onClick={() => setSubmitted(false)} style={resetButtonStyle}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={formStyle}>
              <h3 style={formTitle}>Send a Message</h3>
              <p style={formSubtitle}>We typically respond in less than a business day.</p>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  required
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>Your Message</label>
                <textarea
                  placeholder="How can Elvaro assist you with your project?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={textareaStyle}
                  required
                ></textarea>
              </div>

              <button type="submit" disabled={loading} style={buttonStyle}>
                {loading ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// CASCADING NEON DESIGN SYSTEM
const containerStyle = {
  minHeight: '100vh',
  width: '100%',
  backgroundColor: '#090d16',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '120px 8% 80px',
  position: 'relative',
  overflow: 'hidden',
  color: '#fff',
};

const bgGlowLeft = {
  position: 'absolute',
  top: '10%',
  left: '5%',
  width: '450px',
  height: '450px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
  filter: 'blur(60px)',
  zIndex: 1,
};

const bgGlowRight = {
  position: 'absolute',
  bottom: '10%',
  right: '5%',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
  filter: 'blur(70px)',
  zIndex: 1,
};

const contentWrapper = {
  display: 'grid',
  gridTemplateColumns: '1.1fr 0.9fr',
  gap: '60px',
  width: '100%',
  maxWidth: '1250px',
  zIndex: 10,
  alignItems: 'center',
};

const infoSection = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const subtitleStyle = {
  color: '#a78bfa',
  fontSize: '0.85rem',
  fontWeight: '800',
  letterSpacing: '2px',
  textTransform: 'uppercase',
};

const titleStyle = {
  fontSize: '3.5rem',
  fontWeight: '900',
  lineHeight: '1.1',
  background: 'linear-gradient(to right, #ffffff, #cbd5e1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const descStyle = {
  fontSize: '1.1rem',
  color: '#94a3b8',
  lineHeight: '1.7',
  marginBottom: '20px',
};

const contactDetailsList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  marginTop: '10px',
};

const detailItem = {
  display: 'flex',
  gap: '16px',
  alignItems: 'flex-start',
};

const iconStyle = {
  fontSize: '1.5rem',
  background: 'rgba(167, 139, 250, 0.1)',
  border: '1px solid rgba(167, 139, 250, 0.2)',
  padding: '10px',
  borderRadius: '12px',
  lineHeight: '1',
};

const detailTitle = {
  fontSize: '1.05rem',
  fontWeight: '700',
  color: '#f1f5f9',
  marginBottom: '4px',
};

const detailText = {
  fontSize: '0.95rem',
  color: '#94a3b8',
};

const formCardStyle = {
  background: 'rgba(15, 23, 42, 0.65)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  borderRadius: '24px',
  border: '1px solid rgba(167, 139, 250, 0.15)',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
  padding: '40px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const formTitle = {
  fontSize: '1.5rem',
  fontWeight: '800',
  color: '#fff',
};

const formSubtitle = {
  fontSize: '0.875rem',
  color: '#94a3b8',
  marginTop: '-15px',
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

const textareaStyle = {
  ...inputStyle,
  height: '130px',
  resize: 'none',
  fontFamily: 'inherit',
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
  marginTop: '10px',
};

const successContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px 0',
};

const successCheckStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'rgba(34, 197, 94, 0.15)',
  border: '2px solid #22c55e',
  color: '#22c55e',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const successTitle = {
  fontSize: '1.75rem',
  color: '#fff',
  fontWeight: '800',
  marginBottom: '10px',
};

const successText = {
  color: '#94a3b8',
  fontSize: '0.975rem',
  lineHeight: '1.6',
  marginBottom: '24px',
};

const resetButtonStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '10px',
  fontSize: '0.9rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};
