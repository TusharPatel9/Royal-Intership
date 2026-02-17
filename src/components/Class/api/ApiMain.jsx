import React from "react";
import ApiDemo1 from "./ApiDemo1";
import { Link } from "react-router-dom";

function ApiMain() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>All Apis practice</h1>
      <h2>
        <Link to="/apidemo1">Api Demo 1</Link>
      </h2>
      <h2>
        <Link to="/apihw1">Api Homework 1</Link>
      </h2>
      <h2>
        <Link to="/apihw2">Api Homework 2</Link>
      </h2>
    </div>
  );
}

export default ApiMain;
