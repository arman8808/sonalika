import React from "react";
import "./Filter.css";
function Filter() {
  return (
    <div className="filter">
      <span>
        <p>Filter By Price</p>

        <p>{500}</p>
      </span>

      <input type="range" />
      <span>Filter By Karat</span>
      <div>
        <p>08k</p>
        <p>10k</p>
        <p>12k</p>
        <p>14k</p>
        <p>16k</p>
        <p>18k</p>
        <p>22k</p>
        <p>24k</p>
      </div>
    </div>
  );
}

export default Filter;
