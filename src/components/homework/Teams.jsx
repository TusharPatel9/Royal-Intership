import React from "react";
import { Link } from "react-router-dom";

function Teams() {
  const teams = [
    { id: 1, teamName: "Chennai Super Kings" },
    { id: 2, teamName: "Mumbai Indians" },
    { id: 3, teamName: "Royal Challengers Bangalore" },
    { id: 4, teamName: "Kolkata Knight Riders" },
    { id: 5, teamName: "Rajasthan Royals" },
    { id: 6, teamName: "Sunrisers Hyderabad" },
    { id: 7, teamName: "Lucknow Super Giants" },
    { id: 8, teamName: "Gujarat Titans" },
    { id: 9, teamName: "Delhi Capitals" },
    { id: 10, teamName: "Punjab Kings" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is Total Ipl Team Name</h1>
      {teams.map((team) => (
        <li key={team.id}>
          <Link to={`/teamdetails/${team.teamName}`}>{team.teamName}</Link>
        </li>
      ))}
    </div>
  );
}

export default Teams;
