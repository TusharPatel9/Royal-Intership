import React from "react";
import { useParams } from "react-router-dom";

function Watch() {
  const { name } = useParams();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Watching..{name}</h1>
    </div>
  );
}

export default Watch;
