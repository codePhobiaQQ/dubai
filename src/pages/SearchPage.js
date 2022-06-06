import React from 'react';
import Map from "../components/Map";
import ApartmentsList from "../components/ApartmentsList";
import Header from "../hoc/Header";
import Find from "../components/Find";

const SearchPage = () => {
  return (
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
    </Header>
  );
};

export default SearchPage;
