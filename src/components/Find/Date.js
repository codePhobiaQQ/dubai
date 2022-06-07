import React from 'react';
import del from "../../assets/delete.svg";

const Date = (props) => {
  const dateHandler = () => {
    if (props.whatOpen != 2) {
      props.setWhatOpen(2)
    }
  }

  return (
    <div onClick={dateHandler} className="findEl__input">
      <div className="findEl__input-label">
        <span>Dates</span>
        <div className={props.whatOpen == 2 ? "findEl__guest-amount active" : "findEl__guest-amount"}>
          26 May - 4 June
        </div>
      </div>
      <div className={props.whatOpen == 2 ? "findEl__input-delete active" : "findEl__input-delete"}>
        <img src={del} alt="del"/>
      </div>
      <div className={props.whatOpen == 2 ? "datePopup whenPopup active popup" : "whenPopup popup"}>
        test
      </div>
    </div>
  );
};

export default Date;
