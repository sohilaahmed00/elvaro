import React from 'react';

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL, {
    cache: "force-cache"
  });
  return res.json();
}

export default async function SSGPage() {
  let users = [];
  let time = new Date().toLocaleTimeString();
  let error = false;

  try {
    users = await getData();
  } catch (err) {
    error = true;
    users = [
      { id: 1, name: "Eng. Sohila Ahmed (Fallback)" },
      { id: 2, name: "Eng. Ahmed Ali (Fallback)" },
      { id: 3, name: "Eng. Youssef Mohamed (Fallback)" },
      { id: 4, name: "Eng. Sarah Ibrahim (Fallback)" }
    ];
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>SSG</h1>
        {error && <div style={errorBadge}>⚠️ Offline Mode (Showing Fallback Data)</div>}
        <p style={descStyle}>
          This page was rendered at <strong>build time</strong>. The content is static and will not change until the next build.
        </p>
        <div style={infoBox}>
          <h3>Data from API:</h3>
          {users.map(u => <h1 key={u.id}>{u.name}</h1>)}
          <hr style={hrStyle} />
          <p><strong>Rendered at:</strong> {time}</p>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  minHeight: '100vh',
  padding: '120px 5% 50px',
  background: '#0f172a',
  color: '#fff',
};

const cardStyle = {
  background: 'rgba(30, 41, 59, 0.7)',
  padding: '40px',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  maxWidth: '800px',
  margin: '0 auto',
};

const titleStyle = {
  fontSize: '2.5rem',
  color: '#38bdf8',
  marginBottom: '20px',
};

const descStyle = {
  fontSize: '1.2rem',
  color: '#94a3b8',
  lineHeight: '1.6',
  marginBottom: '30px',
};

const infoBox = {
  background: '#1e293b',
  padding: '20px',
  borderRadius: '12px',
  borderLeft: '4px solid #38bdf8',
};

const hrStyle = {
  margin: '20px 0',
  border: 'none',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
};

const errorBadge = {
  background: 'rgba(244, 63, 94, 0.2)',
  color: '#f43f5e',
  padding: '8px 16px',
  borderRadius: '8px',
  marginBottom: '20px',
  fontSize: '0.9rem',
  fontWeight: '600',
  border: '1px solid rgba(244, 63, 94, 0.3)',
};