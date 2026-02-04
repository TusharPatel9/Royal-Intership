import React from "react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is Project Page</h1>
      <li>
        <Link to="/watch/Todo App">Todo App</Link>
      </li>
      <li>
        <Link to="/watch/Tic Tac Toe Game">Tic Tac Toe Game</Link>
      </li>
      <li>
        <Link to="/watch/Color Changer">Color Changer</Link>
      </li>
      <li>
        <Link to="/watch/Accordion">Accordion</Link>
      </li>
    </div>
  );
}

export default Project;
