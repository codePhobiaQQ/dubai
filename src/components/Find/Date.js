import React, {useEffect, useRef, useState, useMemo} from 'react';
import del from "../../assets/delete.svg";
import DataRangePicker from "../DataRangePicker";
import useWindowSize from "../../hooks/useWindowSize";
import getMonth from "../../services/monthService";

const Date = (props) => {
  const popup = useRef(null)
  const {width, height} = useWindowSize()
  const [dateData, setDateData] = useState("")

  const dateHandler = () => {
    if (props.whatOpen != 2) {
      props.setWhatOpen(2)
    }
  }

  const onDateChange = (startDate, endDate) => {
    if (startDate) {
      setDateData(
        Number(startDate.getUTCDate() + 1) + " " + getMonth(startDate.getUTCMonth() + 1)
        + " - " +
        Number(endDate.getUTCDate() + 1) + " " + getMonth(endDate.getUTCMonth() + 1)
      )
    }
  }

  useEffect(() => {
    const windowHeight = document.querySelector('.calendar-content').clientHeight
  }, [width, height, props.whatOpen])

  return (
    <div onClick={dateHandler} className="findEl__input">
      <div className="findEl__input-label">
        <span>Dates</span>
        <div className={props.whatOpen == 2 || dateData.length > 0 ? "findEl__guest-amount active" : "findEl__guest-amount"}>
          {dateData}
        </div>
      </div>
      <div className={props.whatOpen == 2 ? "findEl__input-delete active" : "findEl__input-delete"}>
        <img src={del} alt="del"/>
      </div>
      <div ref={popup} className={props.whatOpen == 2 ? "datePopup whenPopup active popup" : "datePopup whenPopup popup"}>
        <DataRangePicker dateData={dateData} onDateChange={onDateChange} />
      </div>
    </div>
  );
};

export default Date;
