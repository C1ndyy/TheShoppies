import React from "react";
import { useMediaQuery } from "react-responsive";
import NominationItem from "../NominationItem/NominationItem";
import "./Nominations.css";

function Nominations({ nominations, setNominations, showNominations }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div
      className={`Nominations ${isMobile && !showNominations ? "hidden" : ""}`}
    >
      <h2 className="header">My Nominations</h2>
      {nominations.map((movie) => (
        <NominationItem
          key={movie.imdbID}
          movie={movie}
          nominations={nominations}
          setNominations={setNominations}
        />
      ))}
    </div>
  );
}

export default Nominations;
