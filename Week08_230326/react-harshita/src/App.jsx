import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  // --- Hooks and State ---
  const headingRef = useRef(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState({ name: "", price: "" });

  useEffect(() => {
    headingRef.current.style.color = "#007bff"; // modern blue
  }, []);

  const handleProductChange = (e) => {
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    if (!productInput.name || !productInput.price) {
      alert("Please fill all fields!");
      return;
    }
    setProducts([...products, { ...productInput, id: Date.now() }]);
    setProductInput({ name: "", price: "" });
  };

  // --- Pages ---
  const Home = () => (
    <div style={styles.page}>
      <h2 ref={headingRef} style={styles.heading}>Welcome to Multi-Page Dashboard App!</h2>
      <p style={styles.text}>This page uses <strong>useRef</strong> to style the heading dynamically.</p>
    </div>
  );

  const Feedback = () => (
    <div style={styles.page}>
      <h2 style={styles.heading}>Feedback Page</h2>
      <div style={styles.buttonGroup}>
        <button style={{ ...styles.button, backgroundColor: "#28a745" }} onClick={() => setLikes(likes + 1)}>
          👍 Likes: {likes}
        </button>
        <button style={{ ...styles.button, backgroundColor: "#dc3545" }} onClick={() => setDislikes(dislikes + 1)}>
          👎 Dislikes: {dislikes}
        </button>
      </div>
    </div>
  );

  const Products = () => (
    <div style={styles.page}>
      <h2 style={styles.heading}>Products Page</h2>
      <form style={styles.form} onSubmit={handleProductSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productInput.name}
          onChange={handleProductChange}
          style={styles.input}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productInput.price}
          onChange={handleProductChange}
          style={styles.input}
        />
        <button type="submit" style={{ ...styles.button, backgroundColor: "#007bff" }}>Add Product</button>
      </form>

      <h3 style={{ marginTop: "30px" }}>Product List</h3>
      <div style={styles.productList}>
        {products.length === 0 && <p style={styles.text}>No products added yet.</p>}
        {products.map((p) => (
          <div key={p.id} style={styles.productCard}>
            <strong>{p.name}</strong>
            <span>₹{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // --- Router Navigation ---
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <NavLink to="/" style={styles.navLink}>Home</NavLink>
          <NavLink to="/feedback" style={styles.navLink}>Feedback</NavLink>
          <NavLink to="/products" style={styles.navLink}>Products</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

// --- Styles ---
const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
  },
  nav: {
    marginBottom: "20px",
    display: "flex",
    gap: "15px",
    borderBottom: "2px solid #eee",
    paddingBottom: "10px",
  },
  navLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
  page: {
    padding: "10px",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    marginTop: "15px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  productList: {
    display: "grid",
    gap: "10px",
    marginTop: "10px",
  },
  productCard: {
    padding: "10px 15px",
    border: "1px solid #eee",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
  },
};

export default App;