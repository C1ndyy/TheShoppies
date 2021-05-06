import React from "react";
import "./NominationItem.css";

function NominationItem({ movie, setNominations, nominations }) {
  const movieId = movie.imdbID;
  function removeMovie() {
    setNominations(nominations.filter((movie) => movie.imdbID !== movieId));
  }
  return (
    <div className="NominationItem">
      <div className="poster">
        {movie.Poster !== "N/A" && <img src={movie.Poster} />}
      </div>
      <div className="info">
        <h5>{movie.Title}</h5>
        <h6>{movie.Year}</h6>
      </div>
      <div className="button">
        <button onClick={removeMovie}>Remove</button>
      </div>
    </div>
  );
}

export default NominationItem;
