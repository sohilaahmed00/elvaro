import Link from 'next/link';

const projectsDetail = {
  vertex: {
    title: 'Vertex Tower',
    location: 'Dubai, UAE',
    description: 'A soaring 32-story architectural marvel that redefines the city skyline. The Vertex Tower is a testament to modern engineering and sustainable luxury.',
    highlights: [
      { label: 'Height', value: '32 stories' },
      { label: 'Lobby', value: 'Triple-height lobby' },
      { label: 'Services', value: 'Architectural Design, Structural Engineering' },
      { label: 'Year', value: '2024' }
    ],
    features: [
      'Energy-efficient glass facade',
      'Advanced structural stability systems',
      'Integrated smart building technology',
      'High-speed vertical transportation'
    ]
  },
  'sky-garden': {
    title: 'Sky Garden Residences',
    location: 'London, UK',
    description: 'A revolutionary residential complex that brings nature to the urban environment. Featuring integrated vertical gardens and carbon-neutral construction techniques.',
    highlights: [
      { label: 'Units', value: '150 Luxury Apartments' },
      { label: 'Garden Area', value: '5,000 sq ft' },
      { label: 'Services', value: 'Landscape Architecture, Interior Design' },
      { label: 'Year', value: '2025' }
    ],
    features: [
      'Self-sustaining irrigation systems',
      'Communal rooftop forest',
      'BREEAM Outstanding rating',
      'Modular construction elements'
    ]
  },
  'horizon-mall': {
    title: 'Horizon Mall',
    location: 'New York, USA',
    description: 'A premier retail and entertainment destination featuring a massive column-free interior space made possible by innovative structural engineering.',
    highlights: [
      { label: 'Retail Space', value: '200,000 sq ft' },
      { label: 'Structure', value: 'Long-span steel trusses' },
      { label: 'Services', value: 'Civil Engineering, Project Management' },
      { label: 'Year', value: '2023' }
    ],
    features: [
      '60-meter column-free spans',
      'Dynamic lighting systems',
      'Sustainable HVAC solutions',
      'Underground logistics hub'
    ]
  }
};

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projectsDetail[slug];

  if (!project) {
    return (
      <div style={containerStyle}>
        <h1>Project Not Found</h1>
        <Link href="/projects" style={backButtonStyle}>Back to Projects</Link>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Link href="/projects" style={backButtonStyle}>← Back to Projects</Link>
      
      <div style={headerStyle}>
        <h1 style={titleStyle}>{project.title}</h1>
        <p style={locationStyle}>📍 {project.location}</p>
      </div>

      <div style={contentGridStyle}>
        <div style={leftColStyle}>
          <p style={descriptionStyle}>{project.description}</p>
          
          <h2 style={subtitleStyle}>Key Features</h2>
          <ul style={listStyle}>
            {project.features.map((feature, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>

        <div style={rightColStyle}>
          <div style={highlightBoxStyle}>
            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Project Details</h3>
            {project.highlights.map((item, index) => (
              <div key={index} style={highlightItemStyle}>
                <span style={labelStyle}>{item.label}</span>
                <span style={valueStyle}>{item.value}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" style={ctaButtonStyle}>Inquire About This Project</Link>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: '80px 10%',
  maxWidth: '1200px',
  margin: '0 auto',
};

const backButtonStyle = {
  color: '#a78bfa',
  textDecoration: 'none',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  display: 'inline-block',
  marginBottom: '2.5rem',
};

const headerStyle = {
  marginBottom: '3.5rem',
};

const titleStyle = {
  fontSize: '4rem',
  fontWeight: '800',
  marginBottom: '0.5rem',
};

const locationStyle = {
  fontSize: '1.25rem',
  color: '#cbd5e1',
};

const contentGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr',
  gap: '4rem',
};

const leftColStyle = {};

const rightColStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const descriptionStyle = {
  fontSize: '1.25rem',
  lineHeight: '1.8',
  color: '#cbd5e1',
  marginBottom: '3rem',
};

const subtitleStyle = {
  fontSize: '1.75rem',
  marginBottom: '1.5rem',
  color: '#fff',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const listItemStyle = {
  fontSize: '1.125rem',
  color: '#94a3b8',
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
};

const bulletStyle = {
  color: '#a78bfa',
  fontWeight: 'bold',
};

const highlightBoxStyle = {
  backgroundColor: '#1e293b',
  padding: '2.5rem',
  borderRadius: '1.5rem',
  border: '1px solid rgba(255, 255, 255, 0.05)',
};

const highlightItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1.5rem',
};

const labelStyle = {
  fontSize: '0.75rem',
  color: '#94a3b8',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  marginBottom: '0.25rem',
};

const valueStyle = {
  fontSize: '1.125rem',
  color: '#fff',
  fontWeight: '600',
};

const ctaButtonStyle = {
  backgroundColor: '#a78bfa',
  color: '#000',
  padding: '1.25rem',
  borderRadius: '0.75rem',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',
};
