import React from "react";

function MapDemo5() {
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
      city: "ahmedabad",
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
  ];
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>MapDemo5</h1>
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
            <tr
              style={{ backgroundColor: student.gender === "male" && "blue" }}
            >
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td
                style={{ backgroundColor: student.age > 23 && "yellowgreen" }}
              >
                {student.age}
              </td>
              <td
                style={{ backgroundColor: student.marks > 75 && "palegreen" }}
              >
                {student.marks}
              </td>
              <td>{student.city}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapDemo5;
