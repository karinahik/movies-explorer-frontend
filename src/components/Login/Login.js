import React from "react";
import "../Form/Form.css";
import Form from "../Form/Form";

function Login() {
  return (
    <main>
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        question="Еще не зарегистрированы?"
        linkText=" Регистрация"
        link="/signup"
      >
        <label className="form__label">
          E-mail
          <input
            name="email"
            className="form__input"
            id="email-input"
            type="email"
            required
            placeholder="Ваш Email"
          />
          <span className="form__input-error">
            Адрес электронной почты должен содержать символ "@".
          </span>
        </label>
        <label className="form__label">
          Пароль
          <input
            name="password"
            className="form__input"
            id="password-input"
            type="password"
            minLength="6"
            required
            placeholder="Ваш пароль"
          />
          <span className="form__input-error">Введите пароль</span>
        </label>
      </Form>
    </main>
  );
}

export default Login;
