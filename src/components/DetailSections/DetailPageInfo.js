import React from 'react';
import bigImg from "../../assets/third-page-big.jpg";
import detailMore1 from "../../assets/detailMore1.jpg";
import detailMore2 from "../../assets/detailMore2.jpg";

const DetailPageInfo = () => {
  return (
    <section className="DetailPageInfo">
      <div className="container container_flex">
        <div className="inner-left-container">
          <img src={bigImg} alt="BigImg"/>
        </div>
        <div className="inner-right-container">
          <img src={detailMore1} alt="detailMore1"/>
          <img src={detailMore2} alt="detailMore2"/>
        </div>
      </div>
      <div className="container container_flex">
        <div className="container__inner">
          <div className="inner-left-container">
            <p>
              Absolutely perfect studio apartment in the best location for the JBR and Marina!
              Located directly at the waters of the Dubai Marina Promenade across from the famous Marina Mall.
              200 m from the JBR Public Beach. A short distance (500 m) away from Dubai Marina Metro Station.
            </p>
            <span className="DetailPageInfo__more">Show more</span>
          </div>
          <div className="inner-right-container">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPageInfo;
