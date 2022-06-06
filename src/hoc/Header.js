import React from 'react';
import logo from './../assets/Logo.svg';
import { Link } from "react-router-dom";
import hamburger from './../assets/Hamburger.svg';
import man from "./../assets/man.svg"

const Header = (props) => {
  return (
    <>
      <header className="header">
        <Link className="header__logo" to="/">
          <img  src={logo} alt="Logo"/>
        </Link>
        <div className="header__controllers">
          123
        </div>
        {!props.isSearch
          ?
        <div className="header__info">
          <span className="header__info-who">
            Yura Karmakov
          </span>
          <span>
            <img src={hamburger} alt="hamburger"/>
          </span>
        </div>
          :
        <div className="header__info header__info_man">
          <span className="header__info-who header__info-who_man">
            <img src={man} alt="man"/>
          </span>
          <span>
            <img src={hamburger} alt="hamburger"/>
          </span>
        </div>
          }
      </header>
      {props.children}
    </>
  );
};

export default Header;
