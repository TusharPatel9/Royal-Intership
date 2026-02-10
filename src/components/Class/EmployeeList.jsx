import React from "react";
import SubEmployeesList from "./SubEmployeesList";

function EmployeeList(props) {
  return (
    <div>
      <h1>Employee List</h1>
      <h2>Title : {props.title}</h2>
      <div>
        <h3>Company Name : {props.company.name}</h3>
        <h3>Company Year : {props.company.year}</h3>
      </div>
      <table className="table" style={{ color: "white", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <SubEmployeesList title={props.title} />
    </div>
  );
}

export default EmployeeList;
