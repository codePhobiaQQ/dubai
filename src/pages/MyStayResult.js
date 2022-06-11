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
          <MyStayResultElem image={apart1} />
          <MyStayResultElem image={apart2} />
        </div>
      </section>
    </Header>
  );
};

export default MyStayResult;
