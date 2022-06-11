import React from 'react';

const StaysElem = ({image}) => {
  return (
    <div className="StayElem">
      <img src={image} alt="stay"/>
      <div className="StayElemInfo">
        <div className="StayElemInfoLeft">
          <h4>Deluxe Marina Flat</h4>
          <div className="size">
            <span>2 rooms</span>
            <span>170 m2</span>
          </div>
        </div>
        <button className="oftenBtn">Take a look</button>
      </div>
      <div className="StayElemDetails">
        <span>
          26 May – 4 June
        </span>
        <span>2 guests</span>
      </div>
      <div className="StayElemColor">
        #36593469
      </div>
    </div>
  );
};

export default StaysElem;
