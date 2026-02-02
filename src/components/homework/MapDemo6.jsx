import React from "react";
import amanImg from "../../assets/images/users/aman.jpg";
import kunalImg from "../../assets/images/users/kunal.jpg";
import riyaImg from "../../assets/images/users/riya.jpg";
import nehaImg from "../../assets/images/users/neha.jpg";
import sahilImg from "../../assets/images/users/sahil.jpg";

function MapDemo6() {
  const userImages = {
    Aman: amanImg,
    Riya: riyaImg,
    Kunal: kunalImg,
    Neha: nehaImg,
    Sahil: sahilImg,
  };

  const users = [
    {
      id: 1,
      name: "Aman",
      age: 22,
      gender: "male",
      city: "Delhi",
    },
    {
      id: 2,
      name: "Riya",
      age: 26,
      gender: "female",
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Kunal",
      age: 24,
      gender: "male",
      city: "Pune",
    },
    {
      id: 4,
      name: "Neha",
      age: 21,
      gender: "female",
      city: "Bhopal",
    },
    {
      id: 5,
      name: "Sahil",
      age: 29,
      gender: "male",
      city: "Jaipur",
    },
  ];

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>User Condinatoin Style</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>image</th>
            <th>age</th>
            <th>gender</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              style={{
                backgroundColor: user.age >= 25 && "lightcoral",
              }}
              key={user.id}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <img
                  src={userImages[user.name]}
                  height={60}
                  width={50}
                  alt={`${user.name} image`}
                />
              </td>
              <td
                style={{
                  backgroundColor: user.age >= 25 ? "lightcoral" : "lightgreen",
                }}
              >
                {user.age}
              </td>

              <td style={{ color: user.gender === "male" ? "blue" : "yellow" }}>
                {user.gender}
              </td>
              <td
                style={{
                  border:
                    user.city === "Delhi" || user.city === "Mumbai"
                      ? "4px solid orange"
                      : "2px solid blue",
                }}
              >
                {user.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo6;
