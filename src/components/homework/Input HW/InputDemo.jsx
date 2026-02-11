import React, { useState } from "react";

function InputDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

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
        <p>{name}</p>
      </div>
      <div>
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <p>{email}</p>
      </div>
      <div>
        <label>Password</label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <p>{password}</p>
      </div>
      <div>
        <label>Phone</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)} />
        <p>{phone}</p>
      </div>
      <div>
        <label>Address</label>
        <input type="text" onChange={(e) => setAddress(e.target.value)} />
        <p>{address}</p>
      </div>
      <div>
        <label>City</label>
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <p>{city}</p>
      </div>
      <div>
        <label>State</label>
        <input type="text" onChange={(e) => setState(e.target.value)} />
        <p>{state}</p>
      </div>
      <div>
        <label>Country</label>
        <input type="text" onChange={(e) => setCountry(e.target.value)} />
        <p>{country}</p>
      </div>
      <div>
        <label>Pin Code</label>
        <input type="text" onChange={(e) => setPincode(e.target.value)} />
        <p>{pincode}</p>
      </div>
    </div>
  );
}

export default InputDemo;
