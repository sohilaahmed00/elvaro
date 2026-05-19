import React from 'react';

export default function About() {
  const stats = [
    { value: '15+', label: 'Years of Engineering' },
    { value: '450+', label: 'Projects Completed' },
    { value: '120+', label: 'Expert Architects' },
    { value: '100%', label: 'Precision Standards' }
  ];

  const values = [
    { title: 'Architectural Precision', desc: 'Every line we draw and calculation we perform is backed by our strict quality control metrics and engineering rigor.' },
    { title: 'Sustainable Innovation', desc: 'We integrate ecological, self-sustaining green solutions, targeting carbon neutrality and BREEAM certifications.' },
    { title: 'Global Execution', desc: 'From Dubai to New York, our cross-border logistics and construction managers ensure delivery under any circumstance.' }
  ];

  return (
    <div style={containerStyle}>
      <div style={bgGlowLeft}></div>
      <div style={bgGlowRight}></div>

      <div style={contentWrapper}>
        {/* Hero Section */}
        <div style={heroSection}>
          <p style={subtitleStyle}>OUR LEGACY</p>
          <h1 style={titleStyle}>About ELVARO</h1>
          <p style={descStyle}>
            Elvaro is a premier, multi-disciplinary engineering, architecture, and construction management consultancy. We blend physical robustness with forward-looking aesthetic visions.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={statsGridStyle}>
          {stats.map((stat, index) => (
            <div key={index} style={statCardStyle}>
              <h2 style={statValueStyle}>{stat.value}</h2>
              <p style={statLabelStyle}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div style={valuesSection}>
          <h2 style={sectionTitleStyle}>Our Core Imperatives</h2>
          <div style={valuesGridStyle}>
            {values.map((v, index) => (
              <div key={index} style={valueCardStyle}>
                <span style={numberTag}>0{index + 1}</span>
                <h3 style={valueTitleStyle}>{v.title}</h3>
                <p style={valueDescStyle}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// PREMIUM PRESENTATION STYLING
const containerStyle = {
  minHeight: '100vh',
  width: '100%',
  backgroundColor: '#090d16',
  padding: '120px 8% 80px',
  position: 'relative',
  overflow: 'hidden',
  color: '#fff',
};

const bgGlowLeft = {
  position: 'absolute',
  top: '15%',
  left: '5%',
  width: '450px',
  height: '450px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
  filter: 'blur(50px)',
  zIndex: 1,
};

const bgGlowRight = {
  position: 'absolute',
  bottom: '15%',
  right: '5%',
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(56, 189, 248, 0.10) 0%, rgba(0, 0, 0, 0) 70%)',
  filter: 'blur(60px)',
  zIndex: 1,
};

const contentWrapper = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  zIndex: 10,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
};

const heroSection = {
  textAlign: 'center',
  maxWidth: '800px',
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
  fontSize: '1.2rem',
  color: '#cbd5e1',
  lineHeight: '1.7',
};

const statsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '24px',
};

const statCardStyle = {
  background: 'rgba(15, 23, 42, 0.55)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '16px',
  padding: '30px 20px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
};

const statValueStyle = {
  fontSize: '3rem',
  fontWeight: '850',
  color: '#a78bfa',
  marginBottom: '8px',
  letterSpacing: '-1px',
};

const statLabelStyle = {
  fontSize: '0.9rem',
  color: '#94a3b8',
  fontWeight: '600',
};

const valuesSection = {
  marginTop: '20px',
};

const sectionTitleStyle = {
  fontSize: '2rem',
  fontWeight: '800',
  marginBottom: '40px',
  textAlign: 'center',
  color: '#fff',
};

const valuesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '30px',
};

const valueCardStyle = {
  background: 'rgba(15, 23, 42, 0.65)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(167, 139, 250, 0.15)',
  borderRadius: '20px',
  padding: '40px',
  position: 'relative',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
};

const numberTag = {
  position: 'absolute',
  top: '30px',
  right: '40px',
  fontSize: '2.5rem',
  fontWeight: '900',
  color: 'rgba(167, 139, 250, 0.1)',
  lineHeight: '1',
};

const valueTitleStyle = {
  fontSize: '1.35rem',
  fontWeight: '700',
  color: '#fff',
  marginBottom: '16px',
};

const valueDescStyle = {
  fontSize: '0.95rem',
  color: '#94a3b8',
  lineHeight: '1.6',
};
