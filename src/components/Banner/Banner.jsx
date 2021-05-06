import React from "react";
import "./Banner.css";

function Banner({ nominations }) {
  return (
    <>
      {nominations && (
        <div className={`Banner ${nominations.length < 5 && "hidden"}`}>
          <h4 className="text"> 🎉 You have made 5 nominations!</h4>
        </div>
      )}
    </>
  );
}

export default Banner;
