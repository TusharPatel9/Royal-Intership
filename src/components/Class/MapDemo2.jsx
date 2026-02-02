import React from "react";

function MapDemo2() {
  var users = [
    { id: 1, name: "raj", age: 23, gender: "male" },
    { id: 2, name: "parth", age: 24, gender: "male" },
    { id: 3, name: "jaya", age: 23, gender: "female" },
    { id: 4, name: "Tushar", age: 23, gender: "male" },
    { id: 5, name: "umang", age: 25, gender: "male" },
  ];
  return (
    <div
      style={{
        color: "white",
        textAlign: "center",
        backgroundColor: "#343A40",
      }}
    >
      <h1>MapDemo2</h1>
      {users.map((user) => (
        <h3>
          {user.id} - {user.name} - {user.age} - {user.gender}
        </h3>
      ))}
    </div>
  );
}

export default MapDemo2;
