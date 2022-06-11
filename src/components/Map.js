import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import metka from "../assets/metka.svg"

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
        <img src={metka} alt="metka"/>
        <span>
          Deluxe Marina Flat
          Marina FlatMarina Flat
        </span>
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
