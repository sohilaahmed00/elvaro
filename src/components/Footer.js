import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={logoStyle}>ELVARO</h3>
          <p style={descriptionStyle}>
            Premium engineering and construction solutions, built with precision and innovation.
          </p>
        </div>
        <div style={sectionStyle}>
          <h4 style={titleStyle}>QUICK LINKS</h4>
          <ul style={listStyle}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4 style={titleStyle}>SERVICES</h4>
          <ul style={listStyle}>
            <li><Link href="/services/architectural">Architectural Design</Link></li>
            <li><Link href="/services/civil">Civil Engineering</Link></li>
            <li><Link href="/services/interior">Interior Design</Link></li>
            <li><Link href="/services/construction">Construction Management</Link></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h4 style={titleStyle}>CONTACT</h4>
          <ul style={listStyle}>
            <li>✉️ info@elvaro.com</li>
            <li>📞 +1 (555) 000-0000</li>
            <li>📍 New York, NY</li>
          </ul>
        </div>
      </div>
      <div style={bottomBarStyle}>
        <div style={containerStyle}>
          <p>© 2026 Elvaro. All rights reserved.</p>
          <div style={bottomLinksStyle}>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#0a0f1d',
  color: '#94a3b8',
  padding: '4rem 2rem 1rem',
  marginTop: 'auto',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  maxWidth: '1200px',
  margin: '0 auto',
  gap: '2rem',
};

const sectionStyle = {
  flex: '1 1 200px',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#ffffff',
  marginBottom: '1rem',
};

const descriptionStyle = {
  lineHeight: '1.6',
  maxWidth: '300px',
};

const titleStyle = {
  fontSize: '0.875rem',
  fontWeight: 'bold',
  color: '#ffffff',
  marginBottom: '1.5rem',
  textTransform: 'uppercase',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  lineHeight: '2',
};

const bottomBarStyle = {
  borderTop: '1px solid #1e293b',
  marginTop: '3rem',
  paddingTop: '1.5rem',
  fontSize: '0.75rem',
};

const bottomLinksStyle = {
  display: 'flex',
  gap: '1.5rem',
};
