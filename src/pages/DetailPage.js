import React, {useEffect, useState} from 'react';
import Header from "../hoc/Header";
import chair from "../assets/chair.svg"
import more from "../assets/more.svg"

import bigImg from "../assets/third-page-big.jpg"
import detailMore1 from "../assets/detailMore1.jpg"
import detailMore2 from "../assets/detailMore2.jpg"

import adv1 from "../assets/ThirdPage/ocean.svg"
import adv2 from "../assets/ThirdPage/vilk.svg"
import adv3 from "../assets/ThirdPage/comp.svg"
import adv4 from "../assets/ThirdPage/sneg.svg"
import adv5 from "../assets/ThirdPage/wifi.svg"
import adv6 from "../assets/ThirdPage/washmachine.png"
import adv7 from "../assets/ThirdPage/car.svg"

import thing1 from "../assets/ThirdPage/clock.svg"
import thing2 from "../assets/ThirdPage/smoking.svg"
import thing3 from "../assets/ThirdPage/dog.svg"
import thing4 from "../assets/ThirdPage/congrit.svg"
import thing5 from "../assets/ThirdPage/voln.svg"
import thing6 from "../assets/ThirdPage/bell.svg"

import metka from "../assets/ThirdPage/metka.svg"

import Map from "../components/Map";

const DetailPage = () => {
  const advant = [
    {
      image: adv1,
      text: "Ocean view"
    },
    {
      image: adv1,
      text: "Ocean view"
    },
    {
      image: adv2,
      text: "Kitchen"
    },
    {
      image: adv2,
      text: "Kitchen"
    },
    {
      image: adv3,
      text: "Dedicated workspace"
    },
    {
      image: adv3,
      text: "Dedicated workspace"
    },
    {
      image: adv4,
      text: "Air conditioning"
    },
    {
      image: adv4,
      text: "Air conditioning"
    },
    {
      image: adv5,
      text: "Wifi"
    },
    {
      image: adv5,
      text: "Wifi"
    },
    {
      image: adv6,
      text: "Washing machine"
    },
    {
      image: adv6,
      text: "Washing machine"
    },
    {
      image: adv7,
      text: "Free on-street parking"
    },
    {
      image: adv7,
      text: "Free on-street parking"
    },
  ]
  const things = [
    {
      image: thing1,
      text: "Check-in: 14:00-21:00"
    },
    {
      image: thing5,
      text: "Nearby lake, river, other body of water"
    },
    {
      image: thing1,
      text: "Check-out: 12:00"
    },
    {
      image: thing6,
      text: "Carbon monoxide alarm"
    },
    {
      image: thing2,
      text: "No smoking"
    },
    {
      image: thing6,
      text: "Smoke alarm"
    },
    {
      image: thing3,
      text: "No pets"
    },
    {
      image: adv4,
      text: "This reservation is non-refundable"
    },
    {
      image: thing4,
      text: "No parties or events"
    },
  ]
  const navigation = [
    {
      text: "Entire unit"
    },
    {
      text: "Living area"
    },
    {
      text: "Bedroom area"
    },
    {
      text: "Bathroom"
    },
    {
      text: "Kitchen"
    },
    {
      text: "Exterior"
    }
  ]
  const [whatActive, setWhatActive] = useState(0)


  return (
    <Header>
      <section className="DetailPageMain">
        <div className="container">
          <h2>Deluxe Marina Flat</h2>
          <div className="DetailPageMain__mini-info-els">
            <div className="DetailPageMain__mini-info-el">
              <img src={chair} alt="chir"/>
              <span>2 rooms</span>
            </div>
            <div className="DetailPageMain__mini-info-el">
              <img src={more} alt="chir"/>
              <span>170 m<sup>2</sup></span>
            </div>
          </div>
          <ul className="DetailPageMain__navigation">
            {navigation.map((nav_item, index) => (
              <li
                onClick={() => setWhatActive(index)}
                className={whatActive == index ? "active" : ""}>
                {nav_item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

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

      <section className="DetailPageWhat">
        <div className="container">
          <div className="inner-left-container">
            <h3>What this place offers</h3>
            <ul>
              {advant.map((advand, index) => (
                <li key={"adv" + index}>
                  <img src={advand.image} alt={"Adv" + index} />
                  <span>{advand.text}</span>
                </li>
              ))}
            </ul>
            <button>
              Show all amenities
            </button>
          </div>
        </div>
      </section>

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

      <section className="DetailPageThings">
        <div className="container">
          <div className="inner-left-container">
            <h3>What this place offers</h3>

            <ul>
              {things.map((thing, index) => (
                <li key={"thing" + index}>
                  {thing.image && <img src={thing.image} alt={"Thing" + index} />}
                  <span>{thing.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </Header>
  );
};

export default DetailPage;
