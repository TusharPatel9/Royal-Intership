import EmployeeList from "./EmployeeList";

function Employee() {
  const title = "Tushar";
  const company = {
    name: "Tata",
    year: 2000,
  };
  var employees = [
    { id: 101, name: "parth", age: 23 },
    { id: 102, name: "jay", age: 24 },
    { id: 103, name: "raj", age: 25 },
    { id: 104, name: "ajay", age: 23 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employee</h1>
      <EmployeeList title={title} company={company} employees={employees} />
    </div>
  );
}

export default Employee;
