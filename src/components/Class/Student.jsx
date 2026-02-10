import React from "react";
import Table from "../homework/Table";

function Student() {
  const students = [
    { id: 1, name: "Rahul", course: "MERN", marks: 85 },
    { id: 2, name: "Priya", course: "BCA", marks: 90 },
    { id: 3, name: "Amit", course: "B.Tech", marks: 78 },
  ];

  const columns = ["id", "name", "course", "marks"];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Stundent Data</h1>
      <Table data={students} columns={columns} />
    </div>
  );
}

export default Student;
