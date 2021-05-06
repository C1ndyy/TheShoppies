import React from "react";
import "./ResultItem.css";

function ResultItem({ movie }) {
  return (
    <div className="ResultItem">
      <div className="poster">
        {movie.Poster !== "N/A" && <img src={movie.Poster} />}
      </div>
      <div className="info">
        <h4>{movie.Title}</h4>
        <h6>{movie.Year}</h6>
      </div>
      <div className="button">
        <button>Nominate</button>
      </div>
    </div>
  );
}

export default ResultItem;
