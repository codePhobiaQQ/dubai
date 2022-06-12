import React from 'react';
import del from "./../../assets/delete.svg"

const Where = (props) => {
  const whereHandler = (e) => {
    if (e.target.value.length > 0 && props.whatOpen != 1) {
      props.setWhatOpen(1)
    } else if (e.target.value.length > 0 == 0) {
      props.setWhatOpen(0)
    }
  }

  const guestsHandler = () => {
    if (props.whatOpen != 1) {
      props.setWhatOpen(1)
    }
  }

  return (

    <div onClick={guestsHandler} className="findEl__input">
      <div className="findEl__input-label timeLabel">
        <span>Where are you going?</span>
        <div className={props.whatOpen == 1 ? "findEl__guest-amount active" : "findEl__guest-amount"}>
          Dubai
        </div>
      </div>
      <div className={props.whatOpen == 1 ? "wherePopup active popup" : "wherePopup popup"}>
        <ul>
          <li>
            Dubai
          </li>
        </ul>
      </div>
    </div>

    // <div className="findEl__input">
    //   <div className={props.whatOpen == 1 ? "findEl__where-label active" : "findEl__where-label"}>
    //     Where are you going?
    //   </div>
    //   <input onClick={whereHandler} onChange={whereHandler} className={props.whatOpen == 1 ? "active" : ""} placeholder="Where are you going?" />
    //   <div className={props.whatOpen == 1 ? "findEl__input-delete active" : "findEl__input-delete"}>
    //     <img src={del} alt="del"/>
    //   </div>
    //   <div className={props.whatOpen == 1 ? "wherePopup active popup" : "wherePopup popup"}>
    //     <ul>
    //       <li>
    //         Dubai
    //       </li>
    //       <li>
    //         Jumeirah Burj Al Arab
    //       </li>
    //       <li>
    //         Dubai Burj Al Arab
    //       </li>
    //       <li>
    //         Dubai Burj Al Arab
    //       </li>
    //       <li>
    //         Dubai Burj Al Arab
    //       </li>
    //       <li>
    //         Dubai Burj Al Arab
    //       </li>
    //       <li>
    //         Dubai Burj Al Arab
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Where;
