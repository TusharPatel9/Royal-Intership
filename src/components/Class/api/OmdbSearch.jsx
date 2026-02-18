import axios from "axios";
import React, { useState } from "react";
import Card from "./Card";
// https://www.omdbapi.com/?apikey=d3ac159&s=avatar

function OmdbSearch() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiCall = async () => {
    const res = await axios.get(
      "https://www.omdbapi.com/?apikey=d3ac159&s=avatar"
    );
    const data = res.data.Search;
    setMovies(data);
    console.log(data);
    setLoading(false);
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>OMDB API</h1>
      <button onClick={() => apiCall()}>Get Movies</button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "50px",
          }}
        >
          {movies.map((movie) => (
            <Card
              image={movie.Poster}
              title={movie.Title}
              Year={movie.Year}
              type={movie.Type}
              imdbId={movie.imdbID}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default OmdbSearch;
