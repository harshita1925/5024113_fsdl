function FunctionComponent({ productName, price, brand }) {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Product: {productName}</p>
      <p>Price: ₹{price}</p>
      <p>Brand: {brand}</p>
    </div>
  );
}

export default FunctionComponent;