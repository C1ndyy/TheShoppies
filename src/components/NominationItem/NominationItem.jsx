import React from "react";
import "./NominationItem.css";

function NominationItem({ movie }) {
  return (
    <div className="NominationItem">
      <div className="poster">
        {movie.Poster !== "N/A" && <img src={movie.Poster} />}
      </div>
      <div className="info">
        <h4>{movie.Title}</h4>
        <h6>{movie.Year}</h6>
      </div>
      <div className="button">
        <button>Remove</button>
      </div>
    </div>
  );
}

export default NominationItem;
