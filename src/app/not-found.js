import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={containerStyle}>
      <h1 style={errorCodeStyle}>404</h1>
      <h2 style={titleStyle}>Page Not Found</h2>
      <p style={descriptionStyle}>
        The page you are looking for doesn't exist or has been moved. 
        Please check the URL or return to the home page.
      </p>
      <Link href="/" style={buttonStyle}>
        Return Home
      </Link>
    </div>
  );
}

const containerStyle = {
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 20px',
};

const errorCodeStyle = {
  fontSize: '8rem',
  fontWeight: '900',
  color: '#a78bfa',
  margin: 0,
  lineHeight: '1',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  marginBottom: '1rem',
};

const descriptionStyle = {
  fontSize: '1.125rem',
  color: '#94a3b8',
  maxWidth: '500px',
  marginBottom: '2.5rem',
  lineHeight: '1.6',
};

const buttonStyle = {
  backgroundColor: '#a78bfa',
  color: '#000',
  padding: '1rem 2.5rem',
  borderRadius: '0.5rem',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: 'transform 0.2s',
};
