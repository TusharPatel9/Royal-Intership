import axios from "axios";
import React, { useState } from "react";
import Card from "../../Class/api/Card";
import "../../../assets/css/Card.css";

function ApiHomeWork3() {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiCall = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=d3ac159&s=${title}`
    );
    const data = res.data.Search;
    setMovies(data);
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Api Homework 3</h2>
      <input
        type="text"
        placeholder="Enter a movie name"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => apiCall()}>Get Movies</button>
      {loading ? (
        <h2>Loading...</h2>
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

export default ApiHomeWork3;
