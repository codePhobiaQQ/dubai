import React from 'react';

const DetailsInfoRightNew = () => {
  return (
    <div className="DetailPageInfo__order-info">
      <div className="DetailPageInfo__second-row">
        <div className="DetailPageInfo__row-el DetailPageInfo__row-el_second">
          <div>Dates</div>
          <div className="price">26 May - 4 June (6 nights)</div>
        </div>
        <div className="DetailPageInfo__row-el DetailPageInfo__row-el_second">
          <div>Guests</div>
          <div className="price">2</div>
        </div>
        <div className="DetailPageInfo__row-el DetailPageInfo__row-el_second">
          <div>Check-in time</div>
          <div className="price">11:00 - 12:00</div>
        </div>
        <div className="DetailPageInfo__row-el DetailPageInfo__row-el_second">
          <div>565 AED x 6 nights</div>
          <div className="price">12 280 AED</div>
        </div>
        <div className="DetailPageInfo__row-el DetailPageInfo__row-el_second">
          <div>Cleaning fee</div>
          <div className="price">0 AED</div>
        </div>
        <div className="DetailPageInfo__row-el DetailPageInfo__row-el_second">
          <div>Service fee</div>
          <div className="price">0 AED</div>
        </div>
        <div className="DetailPageInfo__row-el DetailPageInfo__row-el_second total">
          <div>Total cost</div>
          <div className="price">12 280 AED</div>
        </div>
      </div>
    </div>
  );
};

export default DetailsInfoRightNew;
