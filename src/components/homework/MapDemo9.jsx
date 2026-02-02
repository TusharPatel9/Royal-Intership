import React from "react";

function MapDemo9() {
  const phones = [
    {
      id: 1,
      brand: "Samsung",
      model: "S21",
      price: 55000,
      ram: "8GB",
      is5G: true,
    },
    {
      id: 2,
      brand: "Apple",
      model: "iPhone 13",
      price: 65000,
      ram: "6GB",
      is5G: true,
    },
    {
      id: 3,
      brand: "OnePlus",
      model: "Nord",
      price: 30000,
      ram: "8GB",
      is5G: true,
    },
    {
      id: 4,
      brand: "Redmi",
      model: "Note 12",
      price: 18000,
      ram: "6GB",
      is5G: false,
    },
    {
      id: 5,
      brand: "Realme",
      model: "GT",
      price: 25000,
      ram: "12GB",
      is5G: true,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "white" }}>
        Phone Conditional Styling
      </h2>

      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            <th>RAM</th>
            <th>5G</th>
          </tr>
        </thead>

        <tbody>
          {phones.map((phone) => (
            <tr
              key={phone.id}
              style={{
                backgroundColor: phone.price >= 50000 ? "lightcoral" : "",
                opacity: phone.is5G ? 1 : 0.5,
                border: phone.ram === "12GB" ? "3px solid green" : "",
              }}
            >
              <td>{phone.id}</td>

              <td
                style={{
                  color: phone.brand === "Apple" ? "gold" : "WHITE",
                  fontWeight: phone.brand === "Apple" ? "bold" : "normal",
                }}
              >
                {phone.brand}
              </td>

              <td>{phone.model}</td>

              <td>₹{phone.price}</td>

              <td>{phone.ram}</td>

              <td style={{ color: phone.is5G ? "green" : "red" }}>
                {phone.is5G ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo9;
