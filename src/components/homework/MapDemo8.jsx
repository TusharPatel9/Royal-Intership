import React from "react";

function MapDemo8() {
  const watches = [
    { id: 1, brand: "Titan", type: "Analog", price: 4500, color: "Black", inStock: true },
    { id: 2, brand: "Fossil", type: "Digital", price: 8500, color: "Brown", inStock: false },
    { id: 3, brand: "Casio", type: "Analog", price: 3500, color: "Silver", inStock: true },
    { id: 4, brand: "Noise", type: "Smart", price: 6000, color: "Blue", inStock: true },
    { id: 5, brand: "Boat", type: "Smart", price: 3000, color: "Black", inStock: false },
  ];

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>MapDemo8</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Price</th>
            <th>Color</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {watches.map((watch) => (
            <tr key={watch.id}>
              <td>{watch.id}</td>
              <td>{watch.brand}</td>

              <td
                style={{
                  border:
                    watch.type === "Smart"
                      ? "3px solid green"
                      : "1px solid transparent",
                }}
              >
                {watch.type}
              </td>

              <td style={{ color: watch.price > 5000 && "yellow" }}>
                ₹{watch.price}
              </td>

              <td style={{ backgroundColor: watch.color === "Black" && "blue" }}>
                {watch.color}
              </td>

              <td
                style={{
                  color: watch.inStock ? "lightgreen" : "red",
                  fontWeight: "bold",
                }}
              >
                {watch.inStock ? "Available" : "Out of Stock"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo8;
