import React from 'react';
import chair from "../../assets/chair.svg"
import more from "../../assets/more.svg"

const MyStayResultElem = ({image, name, rooms, size, daying, guests, time}) => {
  return (
    <div className="MyStayResultElem">
      <div className="MyStayResultElemLeft">
        <img className="bigImg" src={image} alt="apart"/>
        <div className="MyStayResultElemLeftContent">
          <h3>{name}</h3>
          <div className="detailsEls">
            <div className="detailEl">
              <img src={chair} alt="chair"/>
              <span>{rooms} rooms</span>
            </div>
            <div className="detailEl">
              <img src={more} alt="more"/>
              <span>{size} m<sup>2</sup></span>
            </div>
          </div>
          <div className="extraInfo">
            <div className="extraInfoLine">
              <span>Dates</span>
              <span>{daying}</span>
            </div>
            <div className="extraInfoLine">
              <span>Guests</span>
              <span>{guests}</span>
            </div>
            <div className="extraInfoLine">
              <span>Check-in time</span>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="MyStayResultElemRight">
        <div className="details">
          <span>
            565 AED x 6 nights
          </span>
          <span>
            12 280 AED
          </span>
        </div>
        <div className="details total">
          <span>
            Total cost
          </span>
          <span>
            12 280 AED
          </span>
        </div>
        <button className="oftenBtn">Take a look</button>
      </div>
    </div>
  );
};

export default MyStayResultElem;
