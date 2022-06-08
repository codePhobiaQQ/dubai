import React, {useEffect, useRef} from 'react';
import del from "../../assets/delete.svg";
import DataRangePicker from "../DataRangePicker";

const Date = (props) => {
  const popup = useRef(null)

  const dateHandler = () => {
    if (props.whatOpen != 2) {
      props.setWhatOpen(2)
    }
  }

  useEffect(() => {
    const windowHeight = document.querySelector('.calendar-content').clientHeight
    popup.current.setAttribute("style", `height: ${windowHeight}px;`)
  }, [])

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
      <div ref={popup} className={props.whatOpen == 2 ? "datePopup whenPopup active popup" : "datePopup whenPopup popup"}>
        <DataRangePicker />
      </div>
    </div>
  );
};

export default Date;
