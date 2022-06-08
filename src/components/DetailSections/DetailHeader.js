import React, {useState} from 'react';
import chair from "../../assets/chair.svg";
import more from "../../assets/more.svg";

const DetailHeader = ({ navigation }) => {
  const [whatActive, setWhatActive] = useState(0)

  return (
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
  );
};

export default DetailHeader;
