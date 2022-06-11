import React from 'react';
import apart1 from "../assets/apartSingle.jpg";
import Header from "../hoc/Header";

const MyStay = () => {
  return (
    <Header>
      <section className="myStays">
        <div className="container">
          <h2>My stays</h2>
          <div className="singleStayWrapper">
            <div className="singleStayLeft singleStay">
              <img src={apart1} alt="apart"/>
            </div>
            <div className="singleStayRight singleStay">
              <h3>No stays yet.</h3>
              <p>It`s time to book wonderful place to have good vacation.
                With our world-class hospitality and bold creative flair, we create moments
                that stay with our guests for years to come.</p>
              <button className="oftenBtn">Start searching</button>
            </div>
          </div>
        </div>
      </section>
    </Header>
  );
};

export default MyStay;
