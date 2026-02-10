import React from "react";
import Table from "./Table";

function WatchData() {
  const watches = [
    {
      id: 1,
      brand: "Fossil",
      model: "Gen 6",
      price: 22000,
      type: "Smartwatch",
    },
    { id: 2, brand: "Casio", model: "G-Shock", price: 8000, type: "Digital" },
    { id: 3, brand: "Titan", model: "Neo", price: 5000, type: "Analog" },
    {
      id: 4,
      brand: "Apple",
      model: "Watch Series 9",
      price: 42000,
      type: "Smartwatch",
    },
  ];
  const columns = ["id", "brand", "model", "price", "type"];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Watch Data</h1>
      <Table data={watches} columns={columns} />
    </div>
  );
}

export default WatchData;
