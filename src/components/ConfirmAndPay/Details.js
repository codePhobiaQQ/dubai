import React from 'react';
import preview from './../../assets/preview.jpg';

const Details = () => {
  return (
    <div className="ConfirmDetails DetailPageInfo__order-info">
      <div className="DetailPageInfo__preview-row">
        <img src={preview} alt="preview"/>
        <div className="DetailPageInfo__preview-content">
          <span className="DetailPageInfo__preview-title">Deluxe Marina Flat Marina</span>
          <div className="DetailPageInfo__preview-param">
            <span>2 rooms</span>
            <span>80 m2</span>
          </div>
        </div>
      </div>
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
        <div className="DetailPageInfo__row-el DetailPageInfo__row-el_second DetailPageInfo__row-el_last">
          <div>Service fee</div>
          <div className="price">0 AED</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
