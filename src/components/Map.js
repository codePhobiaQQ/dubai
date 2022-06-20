import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import metka from "../assets/metka.svg"
import apart1 from "../assets/apart1.jpg"

const styles = require('./../GoogleMapStyles.json')

const Map = () => {
  const mapStyles = {
    height: "100%",
    width: "100%"
  };

  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }

  const markers = [
    { position:
        {lat: 41.3851, lng: 2.1734},
        icon: {
          path: 'M24.5 9h-8.1l-2.9-7.7C13.4 1.1 13.2 1 13 1c-0.2 0-0.4 0.1-0.5 0.3L9.6 9H1.5C1'
        }
    }]

  console.log(styles)

  return (
    <div className="mapWrapper">
      {/*<div className="metka">*/}
      {/*  <img className="metkaImg" src={metka} alt="metka"/>*/}
      {/*  <span>*/}
      {/*    Deluxe Marina Flat*/}
      {/*    Marina FlatMarina Flat*/}
      {/*  </span>*/}
      {/*</div>*/}

      {/*<div className="metkaSecond">*/}
      {/*  <div className="metkaTop">*/}
      {/*    <img className="metkaApart" src={apart1} alt="apart"/>*/}
      {/*    <div className="metkaTopWrapper">*/}
      {/*      <span className="title">*/}
      {/*        Deluxe Marina Flat*/}
      {/*        Marina FlatMarina Flat*/}
      {/*      </span>*/}
      {/*      <button className="oftenBtn">*/}
      {/*        <span>989</span>*/}
      {/*        <span>AED</span>*/}
      {/*        <span>6 nights</span>*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="metkaBootom">*/}
      {/*    <span>989</span>*/}
      {/*    <span>AED</span>*/}
      {/*  </div>*/}
      {/*</div>*/}


      <LoadScript
        className="Map"
        // googleMapsApiKey='AIzaSyA12E9PdU6N9-yj2_SNmMeXEpSlwcYdrQA'
        googleMapsApiKey='AIzaSyCFkGulooYS0wMdguDDYE2bUt5iO8pkS-Y'
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          defaultOptions={{
            disableDefaultUI: true, // disable default map UI
            draggable: true, // make map draggable
            keyboardShortcuts: false, // disable keyboard shortcuts
            scaleControl: true, // allow scale controle
            scrollwheel: true, // allow scroll wheel
            styles: styles // change default map styles
          }}
        >
          <Marker {...markers[0]}
                  key={0}
                  position={markers[0].position}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
