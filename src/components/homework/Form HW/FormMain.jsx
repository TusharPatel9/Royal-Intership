import React from "react";
import FormHW1 from "./FormHW1";
import { Link } from "react-router-dom";
function FormMain() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>All The Form </h1>
      <Link to="/formhw1">FormHW1</Link>
      <Link to="/formdemo2">Form Demo 2</Link>
      <Link to="/formdemo3">Form Demo 3</Link>
    </div>
  );
}

export default FormMain;
