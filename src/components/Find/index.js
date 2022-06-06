import React from 'react';
import lupa from './../../assets/lupa.svg';
import {Link} from "react-router-dom";

const Find = () => {
  return (
    <div className="findEl">
      <div className="findEl__input">
        Where are you going?
      </div>
      <div className="findEl__input">
        Dates
      </div>
      <div className="findEl__input">
        Guests
      </div>
      <div className="findEl__input">
        <Link to="/result">
          <img src={lupa} alt="Lupa"/>
          <span>Search</span>
        </Link>
      </div>
    </div>
  );
};

export default Find;
