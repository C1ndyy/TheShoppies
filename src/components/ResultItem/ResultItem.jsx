import React from "react";
import Nominations from "../Nominations/Nominations";
import "./ResultItem.css";

function ResultItem({ movie, nominations, setNominations }) {
  function nominateMovie() {
    setNominations([...nominations, movie]);
  }
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
        <button onClick={nominateMovie}>Nominate</button>
      </div>
    </div>
  );
}

export default ResultItem;
