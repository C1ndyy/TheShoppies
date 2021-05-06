import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { findMovies } from "../../utils/api";
import "./SearchBar.css";

function SearchBar({
  setMovies,
  setTotalResults,
  setSearchError,
  input,
  setInput,
}) {
  async function handleSubmit(e, pageNo) {
    e.preventDefault();
    try {
      let response = await findMovies(input, pageNo);
      if (response.Response == "True") {
        setMovies(response.Search);
        setTotalResults(response.totalResults);
      } else {
        setMovies(null);
        setTotalResults(null);
        setSearchError(response.Error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form className="SearchBar" onSubmit={(e) => handleSubmit(e, 1)}>
        <input
          type="text"
          placeholder="search movies.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>
          <span className="material-icons">search</span>
        </button>
      </form>
    </>
  );
}

export default SearchBar;
