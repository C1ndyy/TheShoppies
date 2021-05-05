import "./App.css";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./components/Header/Header";
import Nominations from "./components/Nominations/Nominations";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import MobileFooter from "./components/MobileFooter/MobileFooter";
let movies = [
  { name: "Movie1", year: 1998, id: 1 },
  { name: "Movie2", year: 1928, id: 2 },
  { name: "Movie3", year: 1988, id: 3 },
  { name: "Movie4", year: 2001, id: 4 },
];

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [showNominations, setShowNominations] = useState(false);
  const [nominations, setNominations] = useState([]);

  function removeNomination(id) {
    setNominations(nominations.filter((movie) => movie.id !== id));
  }

  function addNomination(movie) {
    setNominations([...nominations, movie]);
  }

  return (
    <div className="App">
      {isMobile ? (
        <>
          <Header />
          <div className="content">
            <div className="search">
              <SearchBar />
              <SearchResults setShowNominations={setShowNominations} />
            </div>
            {showNominations && (
              <Nominations
                nominations={nominations}
                setNominations={setNominations}
              />
            )}
            <MobileFooter setShowNominations={setShowNominations} />
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className="content">
            <div className="search">
              <SearchBar />
              <SearchResults setShowNominations={setShowNominations} />
            </div>
            <Nominations
              nominations={nominations}
              setNominations={setNominations}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
