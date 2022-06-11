import React from 'react';
import Header from "../hoc/Header";
import StaysElem from "../components/MyStays/StaysElem";
import apart1 from "../assets/apart1.jpg"
import apart2 from "../assets/apart2.jpg"
import apart3 from "../assets/apart3.jpg"

const MyStays = () => {
  return (
    <Header>
      <section className="myStays">
        <div className="container">
          <h2>My stays</h2>
          <div className="staysWrapper">
            <StaysElem image={apart1} />
            <StaysElem image={apart2} />
            <StaysElem image={apart3} />
          </div>
        </div>
      </section>
    </Header>
  );
};

export default MyStays;
