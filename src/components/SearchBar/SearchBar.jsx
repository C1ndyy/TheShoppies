import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="search movies.." />
      <button>
        <span className="material-icons">search</span>
      </button>
    </div>
  );
}

export default SearchBar;
