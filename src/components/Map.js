import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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
