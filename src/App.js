import "./App.css";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./components/Header/Header";
import Nominations from "./components/Nominations/Nominations";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import MobileFooter from "./components/MobileFooter/MobileFooter";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [showNominations, setShowNominations] = useState(false);
  const [nominations, setNominations] = useState([]);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [searchError, setSearchError] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="search">
          <SearchBar
            setMovies={setMovies}
            setTotalResults={setTotalResults}
            setSearchError={setSearchError}
          />
          <SearchResults
            movies={movies}
            setShowNominations={setShowNominations}
            nominations={nominations}
            setNominations={setNominations}
            totalResults={totalResults}
            searchError={searchError}
          />
        </div>
        <Nominations
          nominations={nominations}
          setNominations={setNominations}
        />
        {isMobile && <MobileFooter setShowNominations={setShowNominations} />}
      </div>
    </div>
  );
}

export default App;
