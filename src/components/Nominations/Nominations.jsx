import React from "react";
import NominationItem from "../NominationItem/NominationItem";
import "./Nominations.css";

function Nominations() {
  return (
    <div className="Nominations">
      <h2 className="header">My Nominations</h2>
      <NominationItem />
      <NominationItem />
      <NominationItem />
    </div>
  );
}

export default Nominations;
