'use client';

export default function Btn() {
  return (
    <button 
      onClick={() => alert('Button Clicked!')}
      style={btnStyle}
    >
      Click Me 🚀
    </button>
  );
}

const btnStyle = {
  backgroundColor: '#4c1d95',
  color: '#fff',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  marginTop: '20px',
  transition: 'background-color 0.2s',
};
