import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>📦 Product List</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product._id}>
              <strong>{product.name}</strong> — ₹{product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
