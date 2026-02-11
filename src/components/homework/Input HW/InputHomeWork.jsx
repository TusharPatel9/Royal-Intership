import { useState } from "react";

function InputHomeWork() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);

  function handleClick() {
    setIsShow(!isShow);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <div>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={handleClick}>Submit</button>

      {isShow && (
        <div style={{ marginTop: "20px" }}>
          <h1>Name: {name}</h1>
          <h1>Email: {email}</h1>
          <h1>Password: {password}</h1>
        </div>
      )}
    </div>
  );
}

export default InputHomeWork;
