import React from "react";
import "./ResultItem.css";

function ResultItem() {
  return (
    <div className="ResultItem">
      <div className="poster"></div>
      <div className="info">
        <h4>Movie Title</h4>
        <h6>Movie Year</h6>
      </div>
      <div className="button">
        <button>Nominate</button>
      </div>
    </div>
  );
}

export default ResultItem;
