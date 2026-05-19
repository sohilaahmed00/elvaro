'use client';
import { useState, useEffect } from 'react';

export default function CSRPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState('');
  const [error, setError] = useState(false);

  console.log(process.env.NEXT_PUBLIC_X, process.env.DB_KEY);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_APIURL || 'https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
        setTime(new Date().toLocaleTimeString());
      })
      .catch((err) => {
        setError(true);
        setUsers([
          { id: 1, name: "Eng. Sohila Ahmed (Fallback)" },
          { id: 2, name: "Eng. Ahmed Ali (Fallback)" },
          { id: 3, name: "Eng. Youssef Mohamed (Fallback)" },
          { id: 4, name: "Eng. Sarah Ibrahim (Fallback)" }
        ]);
        setLoading(false);
        setTime(new Date().toLocaleTimeString());
      });
  }, []);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>CSR</h1>
        {error && <div style={errorBadge}>⚠️ Offline Mode (Showing Fallback Data)</div>}
        <p style={descStyle}>
          This page fetches data on the <strong>client side</strong> after the page loads.
        </p>

        {loading ? (
          <div style={loadingStyle}>Loading data from client...</div>
        ) : (
          <div style={infoBox}>
            <h3>Data from API:</h3>
            {users.map(u => <h1 key={u.id}>{u.name}</h1>)}
            <hr style={hrStyle} />
            <p><strong>Fetched at:</strong> {time} (Client-side clock)</p>
          </div>
        )}
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
  color: '#22c55e',
  marginBottom: '20px',
};

const descStyle = {
  fontSize: '1.2rem',
  color: '#94a3b8',
  lineHeight: '1.6',
  marginBottom: '30px',
};

const loadingStyle = {
  fontSize: '1.2rem',
  color: '#94a3b8',
  fontStyle: 'italic',
};

const infoBox = {
  background: '#1e293b',
  padding: '20px',
  borderRadius: '12px',
  borderLeft: '4px solid #22c55e',
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