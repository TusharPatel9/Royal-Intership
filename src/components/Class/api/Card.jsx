import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/Card.css";

function Card({ image, title, Year, type, imdbId }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />

      <div className="card-body">
        <h3>{title}</h3>
        <h4>Year: {Year}</h4>
        <h4>Type: {type}</h4>
        <h4>ImdbID: {imdbId}</h4>

        <Link to={`/moviedetails/${imdbId}`} className="card-btn">
          Movie Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
