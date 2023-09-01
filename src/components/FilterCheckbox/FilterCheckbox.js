import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onFilter, isShortMovies }) {
  return (
    <form className="filter">
      <input
        className="filter__checkbox"
        type="checkbox"
        onChange={onFilter}
        checked={isShortMovies}
      ></input>
      <span className="filter__checkbox-name">Короткометражки</span>
    </form>
  );
}

export default FilterCheckbox;
