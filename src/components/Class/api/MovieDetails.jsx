import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../../assets/css/MovieDetailLoader.css";

function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { imdbId } = useParams();

  const apiCall = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=d3ac159&i=${imdbId}`
    );
    const data = res.data;
    setMovie(data);
    setLoading(false);
  };

  return (
    <div className="movie-page">
      <h1 className="page-title">Movie Details</h1>

      <button className="details-btn" onClick={apiCall}>
        Load Movie Details
      </button>

      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="movie-container">
          <div className="poster-section">
            <img src={movie.Poster} alt={movie.Title} />
          </div>

          <div className="movie-info">
            <h2>{movie.Title}</h2>

            <p>
              <span>Actors:</span> {movie.Actors}
            </p>
            <p>
              <span>Year:</span> {movie.Year}
            </p>
            <p>
              <span>Language:</span> {movie.Language}
            </p>
            <p>
              <span>Box Office:</span> {movie.BoxOffice}
            </p>
            <p>
              <span>Runtime:</span> {movie.Runtime}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
