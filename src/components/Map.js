import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import metka from "../assets/metka.svg"
import apart1 from "../assets/apart1.jpg"

const Map = () => {
  const mapStyles = {
    height: "100%",
    width: "100%"
  };

  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  return (
    <div className="mapWrapper">
      <div className="metka">
        <img className="metkaImg" src={metka} alt="metka"/>
        <span>
          Deluxe Marina Flat
          Marina FlatMarina Flat
        </span>
      </div>

      <div className="metkaSecond">
        <div className="metkaTop">
          <img className="metkaApart" src={apart1} alt="apart"/>
          <div className="metkaTopWrapper">
            <span className="title">
              Deluxe Marina Flat
              Marina FlatMarina Flat
            </span>
            <button className="oftenBtn">
              <span>989</span>
              <span>AED</span>
              <span>6 nights</span>
            </button>
          </div>
        </div>

        <div className="metkaBootom">
          <span>989</span>
          <span>AED</span>
        </div>
      </div>

      <LoadScript
        className="Map"
        googleMapsApiKey='AIzaSyA12E9PdU6N9-yj2_SNmMeXEpSlwcYdrQA'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    </div>
  );
};

export default Map;
