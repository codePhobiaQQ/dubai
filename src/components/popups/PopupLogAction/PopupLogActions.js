import React, {useState} from "react";
import close from "../../../assets/close.svg";
import Login from "./Login";
import Registration from "./Registration";

const PopupLogActions = ({ isLogActionsOpen, setIsLogActionsOpen, setWhatOpen, whatOpen }) => {

  const cancelHeaderPopupClose = (e) => {
    e.stopPropagation()
  }

  return (
    <div onClick={() => setIsLogActionsOpen(false)} className={isLogActionsOpen ? "HeaderPopupWrapper active" : "HeaderPopupWrapper"}>
      <div onClick={(e) => cancelHeaderPopupClose(e)} className="HeaderPopup">
        <img
          className="close"
          src={close} alt="close"
          onClick={() => setIsLogActionsOpen(false)}
        />
        <Login whatOpen={whatOpen} setWhatOpen={setWhatOpen} />
        <Registration whatOpen={whatOpen} setWhatOpen={setWhatOpen} />
      </div>
    </div>
  );
};

export default PopupLogActions;
