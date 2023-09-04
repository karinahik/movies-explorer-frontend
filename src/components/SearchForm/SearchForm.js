import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className="search">
      <form className="search__form" id="form">
        <input
          name="query"
          className="search__input"
          id="search-input"
          required
          type="text"
          placeholder="Фильм"
        ></input>
        <button className="search__button" type="submit">Найти</button>
      <FilterCheckbox />
      </form>
    </div>
  );
}

export default SearchForm;
