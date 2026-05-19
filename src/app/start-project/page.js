'use client';

import { useState } from 'react';

export default function StartProject() {
  const [projectType, setProjectType] = useState('architectural');
  const [budget, setBudget] = useState('budget-mid');
  const [timeline, setTimeline] = useState('timeline-year');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !description) return;

    setLoading(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const projectTypes = [
    { id: 'architectural', label: 'Architectural Design', icon: '🏛️' },
    { id: 'civil', label: 'Civil Engineering', icon: '🏗️' },
    { id: 'interior', label: 'Interior Design', icon: '🛋️' },
    { id: 'construction', label: 'Construction Mgmt', icon: '🏢' },
  ];

  const budgets = [
    { id: 'budget-low', label: '$100K – $500K' },
    { id: 'budget-mid', label: '$500K – $2M' },
    { id: 'budget-high', label: '$2M – $10M' },
    { id: 'budget-ultra', label: '$10M+' },
  ];

  const timelines = [
    { id: 'timeline-fast', label: 'Under 6 months' },
    { id: 'timeline-mid', label: '6 – 12 months' },
    { id: 'timeline-year', label: '1 – 2 years' },
    { id: 'timeline-long', label: '2+ years' },
  ];

  return (
    <div style={containerStyle}>
      <div style={bgGlowLeft}></div>
      <div style={bgGlowRight}></div>

      <div style={contentWrapper}>
        <div style={headerStyle}>
          <p style={subtitleStyle}>PARTNER WITH ELVARO</p>
          <h1 style={titleStyle}>Initiate Your Vision</h1>
          <p style={descStyle}>
            Tell us about your project requirements, scope, and timeline. Our premium engineering and construction specialists will review your submission and schedule a detailed consultation.
          </p>
        </div>

        <div style={formCardStyle}>
          {submitted ? (
            <div style={successContainer}>
              <div style={successCheckStyle}>✓</div>
              <h2 style={successTitle}>Inquiry Registered!</h2>
              <p style={successText}>
                Your project inquiry has been successfully transmitted to ELVARO's engineering board. 
                One of our Senior Project Managers will contact you within 24 hours to arrange an initial architectural and engineering review.
              </p>
              <button onClick={() => setSubmitted(false)} style={resetButtonStyle}>
                Submit Another Project
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={formStyle}>
              {/* Row 1: Project Type Selection */}
              <div style={sectionGroup}>
                <label style={sectionLabelStyle}>1. Select Project Discipline</label>
                <div style={gridSelectStyle}>
                  {projectTypes.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => setProjectType(t.id)}
                      style={projectType === t.id ? activeGridItem : gridItem}
                    >
                      <span style={{ fontSize: '1.5rem' }}>{t.icon}</span>
                      <span style={gridItemText}>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Budget & Timeline Selectors */}
              <div style={doubleColStyle}>
                <div style={inputGroupStyle}>
                  <label style={sectionLabelStyle}>2. Estimated Budget</label>
                  <div style={selectWrapper}>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      style={selectStyle}
                    >
                      {budgets.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={inputGroupStyle}>
                  <label style={sectionLabelStyle}>3. Expected Timeline</label>
                  <div style={selectWrapper}>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      style={selectStyle}
                    >
                      {timelines.map((tl) => (
                        <option key={tl.id} value={tl.id}>
                          {tl.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Description */}
              <div style={inputGroupStyle}>
                <label style={sectionLabelStyle}>4. Project Scope & Specifications</label>
                <textarea
                  placeholder="Describe your design criteria, structural needs, location, and any specific engineering challenges..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={textareaStyle}
                  required
                ></textarea>
              </div>

              {/* Row 4: Client Info */}
              <label style={sectionLabelStyle}>5. Primary Contact Information</label>
              <div style={doubleColStyle}>
                <div style={inputGroupStyle}>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>

                <div style={inputGroupStyle}>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>

              <button type="submit" disabled={loading} style={buttonStyle}>
                {loading ? 'Submitting Design Brief...' : 'Launch Project Inquiry →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// PREMIUM DESIGN STYLES
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
  top: '5%',
  left: '10%',
  width: '450px',
  height: '450px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
  filter: 'blur(50px)',
  zIndex: 1,
};

const bgGlowRight = {
  position: 'absolute',
  bottom: '5%',
  right: '10%',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
  filter: 'blur(60px)',
  zIndex: 1,
};

const contentWrapper = {
  width: '100%',
  maxWidth: '900px',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
};

const headerStyle = {
  textAlign: 'center',
  maxWidth: '750px',
  margin: '0 auto',
};

const subtitleStyle = {
  color: '#a78bfa',
  fontSize: '0.85rem',
  fontWeight: '800',
  letterSpacing: '2px',
};

const titleStyle = {
  fontSize: '3.5rem',
  fontWeight: '900',
  lineHeight: '1.1',
  marginTop: '8px',
  marginBottom: '16px',
  background: 'linear-gradient(to right, #ffffff, #cbd5e1)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const descStyle = {
  fontSize: '1.1rem',
  color: '#94a3b8',
  lineHeight: '1.6',
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
  gap: '30px',
};

const sectionGroup = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const sectionLabelStyle = {
  fontSize: '0.95rem',
  fontWeight: '700',
  color: '#a78bfa',
  letterSpacing: '0.5px',
};

const gridSelectStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '16px',
};

const gridItem = {
  background: 'rgba(9, 13, 22, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '16px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  textAlign: 'center',
};

const activeGridItem = {
  ...gridItem,
  background: 'rgba(167, 139, 250, 0.12)',
  borderColor: '#a78bfa',
  boxShadow: '0 0 20px rgba(167, 139, 250, 0.15)',
};

const gridItemText = {
  fontSize: '0.9rem',
  fontWeight: '700',
  color: '#f8fafc',
};

const doubleColStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const selectWrapper = {
  position: 'relative',
  width: '100%',
};

const selectStyle = {
  backgroundColor: 'rgba(9, 13, 22, 0.7)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
  padding: '12px 16px',
  fontSize: '0.95rem',
  color: '#fff',
  outline: 'none',
  width: '100%',
  appearance: 'none',
  cursor: 'pointer',
};

const inputStyle = {
  backgroundColor: 'rgba(9, 13, 22, 0.7)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
  padding: '12px 16px',
  fontSize: '0.95rem',
  color: '#fff',
  outline: 'none',
  width: '100%',
};

const textareaStyle = {
  ...inputStyle,
  height: '140px',
  resize: 'none',
  fontFamily: 'inherit',
  lineHeight: '1.6',
};

const buttonStyle = {
  backgroundColor: '#a78bfa',
  color: '#090d16',
  border: 'none',
  borderRadius: '12px',
  padding: '16px',
  fontSize: '1.05rem',
  fontWeight: '800',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: '0 4px 20px rgba(167, 139, 250, 0.25)',
  textAlign: 'center',
  marginTop: '10px',
};

const successContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '30px 0',
};

const successCheckStyle = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: 'rgba(34, 197, 94, 0.15)',
  border: '2px solid #22c55e',
  color: '#22c55e',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '24px',
};

const successTitle = {
  fontSize: '2rem',
  color: '#fff',
  fontWeight: '850',
  marginBottom: '12px',
};

const successText = {
  color: '#94a3b8',
  fontSize: '1.025rem',
  lineHeight: '1.7',
  marginBottom: '32px',
  maxWidth: '650px',
};

const resetButtonStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#fff',
  padding: '12px 24px',
  borderRadius: '10px',
  fontSize: '0.95rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
};
