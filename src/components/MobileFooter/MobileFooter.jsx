import React from "react";
import "./MobileFooter.css";

function MobileFooter({ showNominations, setShowNominations }) {
  function toggleNominations() {
    setShowNominations(!showNominations);
  }
  return (
    <div className="MobileFooter">
      <button
        className={`${showNominations && "red"}`}
        onClick={toggleNominations}
      >
        {showNominations ? "Hide My Nominations" : "View My Nominations"}
      </button>
    </div>
  );
}

export default MobileFooter;
