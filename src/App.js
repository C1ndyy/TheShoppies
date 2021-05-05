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
  return (
    <div className="App">
      {isMobile ? (
        <>
          <Header />
          <div className="content">
            <div className="search">
              <SearchBar />
              <SearchResults />
            </div>
            {showNominations && <Nominations />}
            <MobileFooter setShowNominations={setShowNominations} />
          </div>
        </>
      ) : (
        <>
          <Header />
          <div className="content">
            <div className="search">
              <SearchBar />
              <SearchResults />
            </div>
            <Nominations />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
