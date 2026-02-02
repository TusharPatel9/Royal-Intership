import React from "react";

const MapDemo1 = () => {
  let cars = ["audi", "bmw", "abcd", "pqr", "merc", "rr"];
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        backgroundColor: "#343A40",
      }}
    >
      <h1>MapDemo 1</h1>
      {cars.map((c) => (
        <h3>{c}</h3>
      ))}
    </div>
  );
};

export default MapDemo1;
