import React from 'react';
import Header from "../hoc/Header";
import MyStayResultElem from "../components/MyStays/MyStayResultElem";
import apart1 from './../assets/apart1.jpg';
import apart2 from './../assets/apart2.jpg';

const MyStayResult = () => {
  return (
    <Header>
      <section className="myStays">
        <div className="container">
          <h2>My stays</h2>
          <MyStayResultElem
            name={"Deluxe Marina Flat Marina Flat Marina "}
            rooms={2}
            image={apart1}
            size={170}
            daying={"26 May - 4 June (6 nights)"}
            guests={2}
            time={"11:00 - 12:00"}
          />
          <MyStayResultElem
            name={"Deluxe Marina Flat Marina"}
            rooms={2}
            image={apart2}
            size={170}
            daying={"26 May - 4 June (6 nights)"}
            guests={2}
            time={"11:00 - 12:00"}
          />
        </div>
      </section>
    </Header>
  );
};

export default MyStayResult;
