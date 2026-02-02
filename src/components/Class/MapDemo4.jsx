import React from "react";

export const MapDemo4 = () => {
  var cities = [
    { id: 1, name: "Ahmedabad", pop: 8000000, AQI: 302 },
    { id: 2, name: "Delhi", pop: 10000000, AQI: 400 },
    { id: 3, name: "Dehradun", pop: 8000000, AQI: 150 },
    { id: 4, name: "Patan", pop: 5000000, AQI: 305 },
    { id: 5, name: "Surat", pop: 8500000, AQI: 258 },
  ];
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>MAP DEMO 4</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>POPULATION</th>
            <th>AQI</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city) => {
            return (
              <tr>
                <td>{city.id}</td>
                <td>{city.name}</td>
                <td>{city.pop}</td>
                <td>{city.AQI}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
