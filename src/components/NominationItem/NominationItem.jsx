import React from "react";
import "./NominationItem.css";

function NominationItem() {
  return (
    <div className="NominationItem">
      <div className="poster"></div>
      <div className="info">
        <h4>Movie Title</h4>
        <h6>Movie Year</h6>
      </div>
      <div className="button">
        <button>Remove</button>
      </div>
    </div>
  );
}

export default NominationItem;
