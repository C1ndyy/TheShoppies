import "./App.css";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";
import Header from "./components/Header/Header";
import Nominations from "./components/Nominations/Nominations";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import MobileFooter from "./components/MobileFooter/MobileFooter";
import Banner from "./components/Banner/Banner";
import { findMovies } from "./utils/api";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [showNominations, setShowNominations] = useState(true);
  const [nominations, setNominations] = useState([]);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [input, setInput] = useState("");

  async function handlePageClick(data) {
    try {
      let response = await findMovies(input, data.selected + 1);
      setMovies(response.Search);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Banner nominations={nominations} />
      <Header />
      <div className="content">
        <div className="search">
          <SearchBar
            setMovies={setMovies}
            setTotalResults={setTotalResults}
            setSearchError={setSearchError}
            input={input}
            setInput={setInput}
          />
          <SearchResults
            movies={movies}
            setShowNominations={setShowNominations}
            nominations={nominations}
            setNominations={setNominations}
            totalResults={totalResults}
            searchError={searchError}
          />
          {totalResults && (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={totalResults / 10}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          )}
        </div>
        <Nominations
          nominations={nominations}
          setNominations={setNominations}
          showNominations={showNominations}
        />
        {isMobile && (
          <MobileFooter
            setShowNominations={setShowNominations}
            showNominations={showNominations}
          />
        )}
      </div>
    </div>
  );
}

export default App;
