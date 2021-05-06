import React from "react";
import "./MobileFooter.css";

function MobileFooter({ showNominations, setShowNominations, nominations }) {
  function toggleNominations() {
    setShowNominations(!showNominations);
  }
  return (
    <div className="MobileFooter">
      <button
        className={`${showNominations && "red"}`}
        onClick={toggleNominations}
      >
        {showNominations
          ? "Hide My Nominations"
          : `View My Nominations (${nominations.length})`}
      </button>
    </div>
  );
}

export default MobileFooter;
