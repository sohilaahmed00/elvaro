import Link from 'next/link';

const services = [
  {
    id: 'architectural',
    title: 'Architectural Design',
    description: 'Innovative designs that blend functionality with aesthetics.'
  },
  {
    id: 'civil',
    title: 'Civil Engineering',
    description: 'Robust infrastructure solutions for a modern world.'
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Creating spaces that inspire and enhance productivity.'
  },
  {
    id: 'construction',
    title: 'Construction Management',
    description: 'Precision-led management from concept to completion.'
  }
];

export default function Services() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Our Services</h1>
      <div style={gridStyle}>
        {services.map((service) => (
          <Link key={service.id} href={`/services/${service.id}`} style={cardLinkStyle}>
            <div style={cardStyle}>
              <h3 style={cardTitleStyle}>{service.title}</h3>
              <p style={cardDescriptionStyle}>{service.description}</p>
              <span style={moreStyle}>Learn More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  padding: '100px 10%',
};

const titleStyle = {
  fontSize: '3rem',
  marginBottom: '4rem',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
};

const cardLinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const cardStyle = {
  backgroundColor: '#1e293b',
  padding: '2.5rem',
  borderRadius: '1rem',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s, border-color 0.3s',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const cardTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#fff',
};

const cardDescriptionStyle = {
  color: '#94a3b8',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
};

const moreStyle = {
  color: '#a78bfa',
  fontWeight: 'bold',
  fontSize: '0.875rem',
};
