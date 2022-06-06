import React from 'react';
import bgc from "../assets/back-one.jpg"
import Header from "../hoc/Header";
import Find from "../components/Find";

const SearchPage = () => {
  return (
    <div className="search__wrapper" style={{background: `url(${bgc}) no-repeat center center / cover`}}>
      <Header isSearch={true}>
        <section className="SearchPage">
          <div className="content">
            <h1>Choose your stay</h1>
            <p>
              With our world-class hospitality and bold creative flair,
              we create moments that stay with our guests for years to come.
            </p>
            <Find />
          </div>
        </section>

       {/*<DataRangePicker />*/}
      </Header>
    </div>
  );
};

export default SearchPage;
