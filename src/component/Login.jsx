import React, { useState } from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from 'react-i18next';

import LanguageBtn from './Header/LanguageBtn';

import "./Login.css";

const Login = (props) => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const { setToken, currentLocale, onLanguageChange, colorClass} = props;


  const { t } = useTranslation();

  const loginUser = async (credentials) => {
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/rest-auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    props.setToken(token);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className="login-wrapper">
    <div className="titleLangWrapper">
      <h1>{t('login')}</h1>
      <LanguageBtn   
        currentLocale={currentLocale} 
        onLanguageChange={onLanguageChange} 
        colorClass="btn_lang_white" 
      />
      </div>
      <p className="register-form-link">
        {t('login-code')}
        <a
          href="http://app.geegokids.com/koodi"
          target="_blank"
          rel="noreferrer"
        > {t('login-code-link')}</a>
      </p>
      <p className="login-note">
        {t('login-note')}
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          <p>{t('login-username')}</p>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>{t('login-password')}</p>
          {showPassword ? (
            <>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-solid fa-eye" onClick={handleShowPassword}></i>
            </>
          ) : (
            <>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className="fa-solid fa-eye-slash"
                onClick={handleShowPassword}
              ></i>
            </>
          )}
        </label>
        <div>
          <button type="submit" className="btn btn-primary form-control">
            {t('login-submit')}
          </button>
          <a className="privacy-policy"
            href="https://www.geegokids.com/fi/tietosuojaseloste/"
            target="_blank"
            rel="noreferrer"
          >
            {t('login-privacy')}
          </a>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
