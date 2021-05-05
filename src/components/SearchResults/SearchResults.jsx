import React from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./SearchResults.css";

function SearchResults() {
  return (
    <div className="SearchResults">
      <ResultItem />
      <ResultItem />
      <ResultItem />
    </div>
  );
}

export default SearchResults;
