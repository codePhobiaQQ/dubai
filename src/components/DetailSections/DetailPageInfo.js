import React from 'react';
import bigImg from "../../assets/third-page-big.jpg";
import detailMore1 from "../../assets/detailMore1.jpg";
import detailMore2 from "../../assets/detailMore2.jpg";
import DetailsInfoRight from "./DetailsInfoRight";

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
            <DetailsInfoRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPageInfo;
