import React from "react";
import tataImg from "../../assets/images/cars/tata.jpg";
import kiaImg from "../../assets/images/cars/kia.jpg";
import hondaImg from "../../assets/images/cars/honda.jpg";
import hyundaiImg from "../../assets/images/cars/hyundai.jpg";
import marutiImg from "../../assets/images/cars/maruti.png";

function MapDemo7() {
  const carImages = {
    Tata: tataImg,
    Hyundai: hyundaiImg,
    Maruti: marutiImg,
    Kia: kiaImg,
    Honda: hondaImg,
  };
  const cars = [
    { id: 1, brand: "Tata", model: "Nexon", year: 2022, fuel: "Petrol" },
    { id: 2, brand: "Hyundai", model: "Creta", year: 2021, fuel: "Diesel" },
    { id: 3, brand: "Maruti", model: "Baleno", year: 2023, fuel: "Petrol" },
    { id: 4, brand: "Kia", model: "Seltos", year: 2020, fuel: "Diesel" },
    { id: 5, brand: "Honda", model: "City", year: 2019, fuel: "Petrol" },
  ];
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>MapDemo7</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>brand</th>
            <th>Image</th>
            <th>model</th>
            <th>year</th>
            <th>fuel</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr>
              <td>{car.id}</td>
              <td>{car.brand}</td>
              <td>
                <img
                  src={carImages[car.brand]}
                  alt={`${car.brand} ${car.model} image is Not found`}
                  height={50}
                  width={70}
                />
              </td>
              <td
                style={{
                  border:
                    car.fuel === "Diesel" || car.year < 2021
                      ? "4px solid green"
                      : "1px solid transparent",
                }}
              >
                {car.model}
              </td>
              <td style={{ color: car.year > 2021 && "yellow" }}>{car.year}</td>
              <td style={{ backgroundColor: car.fuel === "Petrol" && "blue" }}>
                {car.fuel}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo7;
