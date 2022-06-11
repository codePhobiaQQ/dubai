import React, {useState} from 'react';
import logo from './../assets/Logo.svg';
import { Link } from "react-router-dom";
import hamburger from './../assets/Hamburger.svg';
import man from "./../assets/man.svg"
import Find from "../components/Find";
import PopupLogActions from "../components/popups/PopupLogActions";

const Header = (props) => {
  const [isRegisterOpen, setRegisterOpen] = useState(false)
  const [isLogActionsOpen, setIsLogActionsOpen] = useState(false)
  const [whatOpen, setWhatOpen] = useState(1)

  const openLoginActionsHandler = (numb = 1) => {
    setIsLogActionsOpen(true)
    setWhatOpen(numb)
  }

  return (
    <>
      <div
        onClick={() => setRegisterOpen(false)}
        className={isRegisterOpen ? "headerHelper active" : "headerHelper"}
      >
      </div>
      <header className="header">
        <Link className="header__logo" to="/">
          <img  src={logo} alt="Logo"/>
        </Link>
        {!props.isSearch &&
          <div className="header__controllers">
            <Find isMain={props.isMain} />
          </div>
        }
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
          <div
            onClick={() => setRegisterOpen(true)}
            className="header__info header__info_man"
          >
            <span className="header__info-who header__info-who_man">
              <img src={man} alt="man"/>
            </span>
            <span className="header__hamburger-icon">
              <img src={hamburger} alt="hamburger"/>
            </span>

            <div className={isRegisterOpen
              ? "header__info-actions-popup active"
              : "header__info-actions-popup"}
            >
              <ul>
                <li onClick={() => openLoginActionsHandler(1)}>
                  Log in
                </li>
                <li onClick={() => openLoginActionsHandler(2)}>
                  Sign up
                </li>
              </ul>
            </div>
          </div>
        }
      </header>
      {props.children}
      <PopupLogActions
        setIsLogActionsOpen={setIsLogActionsOpen}
        isLogActionsOpen={isLogActionsOpen}
        whatOpen={whatOpen}
        setWhatOpen={setWhatOpen}
      />
    </>
  );
};

export default Header;
