import React from "react";

function MapDemo3() {
  var students = [
    {
      id: 1,
      name: "amit",
      age: 23,
      marks: 78,
      city: "ahmedabad",
      gender: "male",
    },
    {
      id: 2,
      name: "prathna",
      age: 25,
      marks: 81,
      city: "Patan",
      gender: "female",
    },
    {
      id: 3,
      name: "rekha",
      age: 22,
      marks: 72,
      city: "ahmedabad",
      gender: "female",
    },
    {
      id: 4,
      name: "Tushar",
      age: 23,
      marks: 94,
      city: "Patan",
      gender: "male",
    },
    { id: 5, name: "raj", age: 27, marks: 80, city: "surat", gender: "male" },
  ];

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>MapDemo 3</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
            <th>City</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.marks}</td>
              <td>{student.city}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo3;
