import Link from 'next/link';

export default function Home() {
  return (
    <div style={heroContainerStyle}>
      <div style={overlayStyle}>
        <div style={contentStyle}>
          <p style={subtitleStyle}>PREMIUM ENGINEERING SOLUTIONS</p>
          <h1 style={titleStyle}>Building the Future with Precision</h1>
          <p style={descriptionStyle}>
            Elvaro delivers world-class architectural, civil, and construction solutions. 
            We transform ambitious visions into iconic structures that stand the test of time.
          </p>
          <div style={buttonGroupStyle}>
            <Link href="/start-project" style={primaryButtonStyle}>
              Start Your Project <span>→</span>
            </Link>
            <Link href="/projects" style={secondaryButtonStyle}>
              View Our Work
            </Link>
          </div>
          <div style={demoGridStyle}>
            <Link href="/ssg" style={smallDemoButtonStyle}>SSG</Link>
            <Link href="/ssr" style={smallDemoButtonStyle}>SSR</Link>
            <Link href="/isr" style={smallDemoButtonStyle}>ISR</Link>
            <Link href="/csr" style={smallDemoButtonStyle}>CSR</Link>
            <Link href="/products" style={smallDemoButtonStyle}>Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const heroContainerStyle = {
  height: '100vh',
  width: '100%',
  backgroundImage: 'url("/hero-bg.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  marginTop: '-80px', // Adjust based on header height
};

const overlayStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(10, 15, 29, 0.7)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10%',
};

const contentStyle = {
  maxWidth: '700px',
};

const subtitleStyle = {
  color: '#a78bfa',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  letterSpacing: '2px',
  marginBottom: '1.5rem',
};

const titleStyle = {
  fontSize: '4rem',
  fontWeight: '800',
  lineHeight: '1.1',
  marginBottom: '2rem',
};

const descriptionStyle = {
  fontSize: '1.125rem',
  lineHeight: '1.6',
  color: '#cbd5e1',
  marginBottom: '2.5rem',
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '1rem',
};

const primaryButtonStyle = {
  backgroundColor: '#a78bfa',
  color: '#000',
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  fontWeight: 'bold',
  fontSize: '1rem',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const secondaryButtonStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: '#fff',
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  fontWeight: 'bold',
  fontSize: '1rem',
  textDecoration: 'none',
};

const demoGridStyle = {
  display: 'flex',
  gap: '0.75rem',
  marginTop: '2rem',
  flexWrap: 'wrap',
};

const smallDemoButtonStyle = {
  backgroundColor: 'rgba(56, 189, 248, 0.1)',
  border: '1px solid rgba(56, 189, 248, 0.3)',
  color: '#38bdf8',
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem',
  fontWeight: '600',
  fontSize: '0.875rem',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
};
