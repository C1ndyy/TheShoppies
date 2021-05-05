import "./App.css";
import Header from "./components/Header/Header";
import Nominations from "./components/Nominations/Nominations";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="search">
          <SearchBar />
          <SearchResults />
        </div>
        <Nominations />
      </div>
    </div>
  );
}

export default App;
