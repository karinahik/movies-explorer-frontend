import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import account from "../../images/account-btn.svg";
import menu from "../../images/menu-button.png";
import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation();

  // Временная функция для проверки, нужно ли отображать второй хедер
  const shouldShowSecondHeader = () => {
    const { pathname } = location;
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    );
  };

  // Временная функция для проверки, нужно ли отображать первый хедер
  const shouldShowFirstHeader = () => {
    const { pathname } = location;
    return pathname === "/";
  };

  const [isClicked, setIsClicked] = React.useState(false);

  function handleOpen() {
    setIsClicked(true);
  }

  function handleClose() {
    setIsClicked(false);
  }

  return (
    <>
      {shouldShowFirstHeader() && (
        <header className="header" id="header">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип приложения" />
          </Link>
          <div className="header__button-container">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-black">
              Войти
            </Link>
          </div>
        </header>
      )}

      {shouldShowSecondHeader() && (
        <header className="header header_white" id="header-gray">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип приложения" />
          </Link>
          <div className="header__button-container-cards">
            <NavLink
              to="/movies"
              className="header__button"
              activeclassname="header__button_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__button"
              activeclassname="header__button_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-container">
            <Link to="/profile" className="header__account-button">
              <img
                className="header__account-image"
                src={account}
                alt="Кнопка входа в аккаунт"
              />
            </Link>
            <button className="header__menu-button" onClick={handleOpen}>
              <img src={menu} alt="Кнопка меню" />
            </button>
          </div>
          {isClicked ? <Navigation handleClose={handleClose} /> : ""}
        </header>
      )}
    </>
  );
}

export default Header;
