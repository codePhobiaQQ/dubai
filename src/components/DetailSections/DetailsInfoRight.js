import React from 'react';

const DetailsInfoRight = () => {
  return (
    <div className="DetailPageInfo__order-info">
      <div className="DetailPageInfo__first-row">
        <div className="DetailPageInfo__row-el">
          <span>
            Dates
          </span>
          <span>
            26 May - 4 June
          </span>
        </div>
        <div className="DetailPageInfo__row-el">
          <span className="DetailPageInfo__row-el-inner">
            Result
          </span>
          <span className="DetailPageInfo__row-el-inner">
            2 guests
          </span>
        </div>
      </div>
      <div className="DetailPageInfo__second-row">
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
      </div>
      <button className="DetailPageInfo__reserve-btn">
        Reserve  12 280 AED
      </button>
    </div>
  );
};

export default DetailsInfoRight;
