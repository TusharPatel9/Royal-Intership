import axios from "axios";
import React, { useState } from "react";

function ApiHomeWork1() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const apiCall = async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=5");
    const data = res.data.products;
    setProducts(data);
    setLoading(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Api Homework 1</h2>
      <button onClick={() => apiCall()}>GET</button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="table table-primary" style={{ marginTop: "50px" }}>
          <thead>
            <tr>
              <th>title</th>
              <th>Description</th>
              <th>category</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiHomeWork1;
