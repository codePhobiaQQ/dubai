import React, {useState} from 'react';

const Guests = (props) => {
  const guestsHandler = () => {
    if (props.whatOpen != 3) {
      props.setWhatOpen(3)
    }
  }

  return (
    <div onClick={guestsHandler} className="findEl__input">
      <div className="findEl__input-label">
        <span>Guests</span>
        <div className={props.whatOpen == 3 ? "findEl__guest-amount active" : "findEl__guest-amount"}>
          2 guests
        </div>
      </div>
      <div className={props.whatOpen == 3 ? "guestPopup active popup" : "guestPopup popup"}>
        <div className="guestPopup__row">
          <div className="guestPopup__leftSide">
            <span>Adults</span>
            <span>Ages 13 or above</span>
          </div>
          <div className="guestPopup__rightSide">
            <span className="disabled">-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>
        <div className="guestPopup__row">
          <div className="guestPopup__leftSide">
            <span>Children</span>
            <span>Ages 11 or under</span>
          </div>
          <div className="guestPopup__rightSide">
            <span className="disabled">-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guests;
