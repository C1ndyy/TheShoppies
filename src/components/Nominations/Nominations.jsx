import React from "react";
import NominationItem from "../NominationItem/NominationItem";
import "./Nominations.css";

function Nominations({ nominations, setNominations }) {
  return (
    <div className="Nominations">
      <h2 className="header">My Nominations</h2>
      {nominations.map((movie) => (
        <NominationItem movie={movie} />
      ))}
    </div>
  );
}

export default Nominations;
