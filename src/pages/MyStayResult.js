import React from 'react';
import Header from "../hoc/Header";
import MyStayResultElem from "../components/MyStays/MyStayResultElem";

const MyStayResult = () => {
  return (
    <Header>
      <section className="myStays">
        <div className="container">
          <h2>My stays</h2>
          <MyStayResultElem />
          <MyStayResultElem />
        </div>
      </section>
    </Header>
  );
};

export default MyStayResult;
