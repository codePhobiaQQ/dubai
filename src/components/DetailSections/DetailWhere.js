import React from 'react';
import Map from "../Map";
import metka from "../../assets/ThirdPage/metka.svg";

const DetailWhere = () => {
  return (
    <section className="DetailPageWhere">
      <div className="container">
        <div className="inner-left-container">
          <h3>Where you`ll live</h3>
          <div className="map">
            <Map />
          </div>
          <div className="DetailPageWhere__content">
            <img src={metka} alt="metka"/>
            <p>
              Deluxe Marina Flat, Al Maha, a Luxury Collection
              Desert Resort & Spa, <br />
              Dubai 1 Sheikh Mohammed bin
              Rashid Blvd - Downtown Dubai - Dubai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailWhere;
