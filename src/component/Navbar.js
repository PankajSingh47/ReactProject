import React from "react";
import "./style.css";

const navbar = ({ filterItem, LeaderList }) => {

  return (
    <>
    <nav className="navbar">
        <div>
          <h1 className="btn-groupp">ALL TIME WORLD LEADERS</h1>
        </div>
      </nav>


      <nav className="navbar">
        <div className="btn-group">
          {LeaderList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
