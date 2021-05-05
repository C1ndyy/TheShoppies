import React, { useState, useEffect } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [input, setInput] = useState("");
  const BASE_URL = "http://www.omdbapi.com/?apikey=a6e00c90";

  async function findMovies(e) {
    e.preventDefault();

    try {
      let response = await fetch(`${BASE_URL}&s=${input}&type=movie&page=1`);
      let movies = await response.json();
      console.log("movies:", movies);
    } catch (error) {}
  }
  return (
    <form className="SearchBar" onSubmit={findMovies}>
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
  );
}

export default SearchBar;
