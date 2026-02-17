import axios from "axios";
import React from "react";
import { useState } from "react";

function ApiDemo1() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiCall = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user/");
    const data = res.data;
    setMessage(data.message);
    setUsers(data.data);
    console.log(data.data);
    setLoading(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Api Demo 1</h1>
      <button
        onClick={() => {
          apiCall();
        }}
      >
        GET
      </button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="table table-primary">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiDemo1;

{
  /* <h2>{message}</h2>
          } */
}
