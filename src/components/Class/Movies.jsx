import React from "react";
import { Link, useParams } from "react-router-dom";

function Movies() {
  const movies = [
    { movieID: 1, movieName: "Naruto" },
    { movieID: 1, movieName: "Death Note" },
    { movieID: 1, movieName: "HunterXHunter" },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is Movie page</h1>
      {movies.map((movie) => (
        <li key={movie.movieID}>
          <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
        </li>
      ))}
    </div>
  );
}

export default Movies;
