import Link from 'next/link';

const projects = [
  {
    id: 'vertex',
    title: 'Vertex Tower',
    location: 'Dubai, UAE',
    description: 'A 32-story architectural marvel featuring a triple-height lobby.',
    category: 'Commercial'
  },
  {
    id: 'sky-garden',
    title: 'Sky Garden Residences',
    location: 'London, UK',
    description: 'Luxury residential living with integrated vertical gardens.',
    category: 'Residential'
  },
  {
    id: 'horizon-mall',
    title: 'Horizon Mall',
    location: 'New York, USA',
    description: 'A modern shopping destination with cutting-edge structural engineering.',
    category: 'Commercial'
  }
];

export default function Projects() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Our Projects</h1>
      <p style={subtitleStyle}>Showcasing our legacy of excellence across the globe.</p>
      
      <div style={gridStyle}>
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} style={cardLinkStyle}>
            <div style={cardStyle}>
              <div style={categoryStyle}>{project.category}</div>
              <h3 style={cardTitleStyle}>{project.title}</h3>
              <p style={locationStyle}>📍 {project.location}</p>
              <p style={cardDescriptionStyle}>{project.description}</p>
              <span style={viewStyle}>View Project Details →</span>
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
  fontSize: '3.5rem',
  fontWeight: '800',
  textAlign: 'center',
  marginBottom: '1rem',
};

const subtitleStyle = {
  fontSize: '1.25rem',
  color: '#94a3b8',
  textAlign: 'center',
  marginBottom: '4rem',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '2.5rem',
};

const cardLinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const cardStyle = {
  backgroundColor: '#1e293b',
  padding: '2.5rem',
  borderRadius: '1.5rem',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s, border-color 0.3s',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const categoryStyle = {
  color: '#a78bfa',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '1rem',
};

const cardTitleStyle = {
  fontSize: '1.75rem',
  marginBottom: '0.5rem',
  color: '#fff',
};

const locationStyle = {
  fontSize: '0.875rem',
  color: '#cbd5e1',
  marginBottom: '1.5rem',
};

const cardDescriptionStyle = {
  color: '#94a3b8',
  lineHeight: '1.6',
  marginBottom: '2rem',
  flexGrow: 1,
};

const viewStyle = {
  color: '#a78bfa',
  fontWeight: 'bold',
  fontSize: '0.875rem',
};
