import React from "react";
import { useParams } from "react-router-dom";

function TeamDetails() {
  const { teamname } = useParams();
  return (
    <div style={{textAlign:"center" , marginTop:"30px"}}>
      <h1>Playing {teamname} </h1>
    </div>
  );
}

export default TeamDetails;
