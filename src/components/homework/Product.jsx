import React from "react";
import Table from "./Table";

function Product() {
  const products = [
    { id: 1, name: "Laptop", price: 55000, stock: 10 },
    { id: 2, name: "Mobile", price: 20000, stock: 25 },
    { id: 3, name: "Headphone", price: 2000, stock: 50 },
  ];

  const columns = ["id", "name", "price", "stock"];
  return (
    <div style={{textAlign:"center"}}>
      <h1>Product Data</h1>
      <Table data={products} columns={columns} />
    </div>
  );
}

export default Product;
