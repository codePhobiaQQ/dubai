import React from 'react';
import Map from "../components/Map";
import ApartmentsList from "../components/ApartmentsList";
import Header from "../hoc/Header";

const SearchPage = () => {
  return (
    <Header>
      <section className="SearchPage">
        <ApartmentsList />
        <Map />
      </section>
    </Header>
  );
};

export default SearchPage;
