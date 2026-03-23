import { useState } from "react";

function FormExample() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.price) {
      alert("All fields required");
      return;
    }

    setProducts([...products, product]);

    setProduct({
      name: "",
      price: "",
    });
  };

  return (
    <div>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>

      <h3>Product List</h3>
      {products.map((p, index) => (
        <p key={index}>
          {p.name} - ₹{p.price}
        </p>
      ))}
    </div>
  );
}

export default FormExample;