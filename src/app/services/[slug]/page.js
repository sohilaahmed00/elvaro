import Link from 'next/link';

const servicesDetail = {
  architectural: {
    title: 'Architectural Design',
    description: 'We create breathtaking architectural designs that push the boundaries of innovation and functionality. Our team of world-class architects works closely with clients to transform their vision into reality.',
    features: ['Custom Home Design', 'Commercial Architecture', 'Sustainable Design', 'Urban Planning'],
    icon: '🏛️'
  },
  civil: {
    title: 'Civil Engineering',
    description: 'Our civil engineering solutions are built on a foundation of precision and safety. We handle complex infrastructure projects with a focus on long-term durability and efficiency.',
    features: ['Structural Analysis', 'Infrastructure Development', 'Site Planning', 'Environmental Engineering'],
    icon: '🏗️'
  },
  interior: {
    title: 'Interior Design',
    description: 'We believe that the interior of a building should be as stunning as its exterior. Our interior design team creates spaces that are both beautiful and highly functional.',
    features: ['Residential Interiors', 'Office Space Planning', 'Luxury Commercial Spaces', 'Furniture Selection'],
    icon: '🛋️'
  },
  construction: {
    title: 'Construction Management',
    description: 'From groundbreaking to the final walkthrough, our construction management team ensures that every project is completed on time, within budget, and to the highest standards.',
    features: ['Project Scheduling', 'Budget Management', 'Quality Control', 'Safety Compliance'],
    icon: '🏢'
  }
};

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesDetail[slug];

  if (!service) {
    return (
      <div style={containerStyle}>
        <h1>Service Not Found</h1>
        <Link href="/services" style={backButtonStyle}>Back to Services</Link>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Link href="/services" style={backButtonStyle}>← Back to Services</Link>
      <div style={headerStyle}>
        <span style={iconStyle}>{service.icon}</span>
        <h1 style={titleStyle}>{service.title}</h1>
      </div>
      <p style={descriptionStyle}>{service.description}</p>
      
      <div style={sectionStyle}>
        <h2 style={subtitleStyle}>Key Expertise</h2>
        <ul style={listStyle}>
          {service.features.map((feature, index) => (
            <li key={index} style={listItemStyle}>
              <span style={bulletStyle}>•</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      <div style={ctaBoxStyle}>
        <h3>Ready to start your project?</h3>
        <p>Contact us today to discuss how we can help you with {service.title}.</p>
        <Link href="/contact" style={ctaButtonStyle}>Get in Touch</Link>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: '80px 10%',
  maxWidth: '900px',
  margin: '0 auto',
};

const backButtonStyle = {
  color: '#a78bfa',
  textDecoration: 'none',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  display: 'inline-block',
  marginBottom: '2rem',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  marginBottom: '2rem',
};

const iconStyle = {
  fontSize: '3rem',
};

const titleStyle = {
  fontSize: '3.5rem',
  fontWeight: '800',
};

const descriptionStyle = {
  fontSize: '1.25rem',
  lineHeight: '1.8',
  color: '#cbd5e1',
  marginBottom: '3rem',
};

const sectionStyle = {
  marginBottom: '4rem',
};

const subtitleStyle = {
  fontSize: '1.75rem',
  marginBottom: '1.5rem',
  color: '#fff',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
};

const listItemStyle = {
  fontSize: '1.125rem',
  color: '#94a3b8',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const bulletStyle = {
  color: '#a78bfa',
  fontWeight: 'bold',
};

const ctaBoxStyle = {
  backgroundColor: '#1e293b',
  padding: '3rem',
  borderRadius: '1.5rem',
  textAlign: 'center',
  border: '1px solid rgba(167, 139, 250, 0.2)',
};

const ctaButtonStyle = {
  display: 'inline-block',
  marginTop: '1.5rem',
  backgroundColor: '#a78bfa',
  color: '#000',
  padding: '1rem 2.5rem',
  borderRadius: '0.5rem',
  fontWeight: 'bold',
  textDecoration: 'none',
};
