import React from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./SearchResults.css";

function SearchResults({
  movies,
  totalResults,
  searchError,
  setNominations,
  nominations,
}) {
  return (
    <div className="SearchResults">
      {totalResults && (
        <h5 className="total-results">total results: {totalResults} </h5>
      )}

      {movies ? (
        movies.map((movie) => (
          <ResultItem
            key={movie.imdbID}
            movie={movie}
            nominations={nominations}
            setNominations={setNominations}
          />
        ))
      ) : (
        <h2 className="no-results">{searchError}</h2>
      )}
    </div>
  );
}

export default SearchResults;
