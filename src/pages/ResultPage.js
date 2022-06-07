import React from 'react';
import ApartmentsList from "../components/ApartmentsList";
import Map from "../components/Map";
import Header from "../hoc/Header";

const ResultPage = () => {
  return (
    <Header>
      <section className="SearchPage">
        <ApartmentsList />
        <Map />
      </section>
    </Header>
  );
};

export default ResultPage;
