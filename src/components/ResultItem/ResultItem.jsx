import React, { useState, useEffect } from "react";
import "./ResultItem.css";

function ResultItem({ movie, nominations, setNominations }) {
  const [nominated, setNominated] = useState(false);

  function nominateMovie() {
    setNominations([...nominations, movie]);
    setNominated(true);
  }

  function alreadyNominated(movie) {
    return nominations.some((nomination) => nomination.imdbID === movie.imdbID);
  }

  useEffect(() => {
    if (alreadyNominated(movie)) {
      console.log(movie, "already nominated");
      setNominated(true);
    }
  }, []);

  return (
    <div className="ResultItem">
      <div className="poster">
        {movie.Poster !== "N/A" && <img src={movie.Poster} />}
      </div>
      <div className="info">
        <h5>{movie.Title}</h5>
        <h6>{movie.Year}</h6>
      </div>
      <div>
        {!nominated ? (
          <button
            className="button active"
            disabled={nominations.length === 5}
            onClick={nominateMovie}
          >
            Nominate
          </button>
        ) : (
          <button className="button disabled" disabled>
            Nominated
          </button>
        )}
      </div>
    </div>
  );
}

export default ResultItem;
