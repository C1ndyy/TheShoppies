import React from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./SearchResults.css";

function SearchResults({ movies, setNominations, nominations }) {
  return (
    <div className="SearchResults">
      {movies.map((movie) => (
        <ResultItem
          key={movie.imdbID}
          movie={movie}
          nominations={nominations}
          setNominations={setNominations}
        />
      ))}
    </div>
  );
}

export default SearchResults;
