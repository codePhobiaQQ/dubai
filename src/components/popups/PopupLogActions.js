import React, {useState} from "react";
import close from "./../../assets/close.svg";

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

      </div>
    </div>
  );
};

export default PopupLogActions;
