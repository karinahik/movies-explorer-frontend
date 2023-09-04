import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onFilter, isShortMovies }) {
  return (
    <div className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={onFilter}
        checked={isShortMovies}
      ></input>
      <span className="filter__checkbox-name">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
