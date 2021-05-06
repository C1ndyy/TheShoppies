import React from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./SearchResults.css";

function SearchResults({ movies }) {
  return (
    <div className="SearchResults">
      {movies.map((movie) => (
        <ResultItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default SearchResults;
