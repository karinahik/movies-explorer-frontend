import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard() {
  const location = useLocation();

  // Временная функция для проверки, нужно ли отображать сохранённые фильмы
  const shouldShowSaveFilm = () => {
    const { pathname } = location;
    return pathname === "/saved-movies";
  };

  // Временная функция для проверки, нужно ли отображать сохранённые фильмы
  const shouldShowFilm = () => {
    const { pathname } = location;
    return pathname === "/movies";
  };

  return (
    <>
      {shouldShowSaveFilm() && (
        <li className="card">
          <div className="card__container">
            <img alt="" className="card__image" />
            <button
              type="button"
              className="cards__like-button cards__like-delite"
            ></button>
            <div className="card__title-block">
              <h2 className="card__title">33 слова о дизайне</h2>
              <span className="card__time">1ч 37м</span>
            </div>
          </div>
        </li>
      )}

      {shouldShowFilm() && (
        <>
          <li className="card">
            <div className="card__container">
              <img alt="" className="card__image" />
              <button
                type="button"
                className="cards__like-button cards__like-active"
              ></button>
              <div className="card__title-block">
                <h2 className="card__title">33 слова о дизайне</h2>
                <span className="card__time">1ч 37м</span>
              </div>
            </div>
          </li>

          <li className="card">
            <div className="card__container">
              <img alt="" className="card__image" />
              <button
                type="button"
                className="cards__like-button cards__like-active"
              ></button>
              <div className="card__title-block">
                <h2 className="card__title">33 слова о дизайне</h2>
                <span className="card__time">1ч 37м</span>
              </div>
            </div>
          </li>
          
          <li className="card">
            <div className="card__container">
              <img alt="" className="card__image" />
              <button type="button" className="cards__like-button">
                Сохранить
              </button>
              <div className="card__title-block">
                <h2 className="card__title">33 слова о дизайне</h2>
                <span className="card__time">1ч 37м</span>
              </div>
            </div>
          </li>

    

          
        </>
      )}
    </>
  );
}

export default MoviesCard;
