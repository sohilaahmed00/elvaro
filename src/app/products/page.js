export default async function ProductsPage() {
  let products = [];
  let error = false;

  try {
    const apiUrl = process.env.NEXT_PUBLIC_PRODUCTS_API || 'https://dummyjson.com/products';
    const res = await fetch(`${apiUrl}?limit=6`);
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    products = data.products.map(p => ({
      id: p.id,
      title: p.title,
      price: p.price,
      image: p.thumbnail
    }));
  } catch (err) {
    error = true;
    // Fallback static data
    products = [
      { id: 1, title: "Fjallraven - Foldsack No. 1", price: 109.95, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
      { id: 2, title: "Mens Casual Premium Slim Fit", price: 22.3, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
    ];
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Our Products (SSG)</h1>
      {error && <div style={errorBadge}>⚠️ Offline Mode (Showing Static Products)</div>}
      <p style={subtitleStyle}>Showing products fetched at build time for maximum speed.</p>
      
      <div style={gridStyle}>
        {products.map((product) => (
          <div key={product.id} style={productCard}>
            <img src={product.image} alt={product.title} style={imageStyle} />
            <h3 style={productTitle}>{product.title}</h3>
            <p style={priceStyle}>${product.price}</p>
            <button style={buttonStyle}>Add to Cart</button>
          </div>
        ))}
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

const titleStyle = {
  fontSize: '3rem',
  textAlign: 'center',
  marginBottom: '10px',
  color: '#a78bfa',
};

const subtitleStyle = {
  textAlign: 'center',
  color: '#94a3b8',
  marginBottom: '50px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '30px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const productCard = {
  background: 'rgba(30, 41, 59, 0.5)',
  borderRadius: '16px',
  padding: '20px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'contain',
  background: '#fff',
  borderRadius: '12px',
  marginBottom: '15px',
  padding: '10px',
};

const productTitle = {
  fontSize: '1rem',
  fontWeight: '600',
  marginBottom: '10px',
  height: '45px',
  overflow: 'hidden',
};

const priceStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '#38bdf8',
  marginBottom: '20px',
};

const buttonStyle = {
  background: '#a78bfa',
  color: '#000',
  border: 'none',
  padding: '10px',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: 'auto',
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
  textAlign: 'center',
  maxWidth: '400px',
  margin: '0 auto 20px',
};
