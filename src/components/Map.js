import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import metka from "../assets/metka.svg"
// import apart1 from "../assets/apart1.jpg"
import {Map as Mapping, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


// const styles = require('./../GoogleMapStyles.json')

const Map = (props) => {
  const defaultProps = {
    center: {
      lat: 101.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

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


      {/*<LoadScript*/}
      {/*  className="Map"*/}
      {/*  // googleMapsApiKey='AIzaSyA12E9PdU6N9-yj2_SNmMeXEpSlwcYdrQA'*/}
      {/*  googleMapsApiKey='AIzaSyCFkGulooYS0wMdguDDYE2bUt5iO8pkS-Y'*/}
      {/*>*/}
      {/*  <GoogleMap*/}
      {/*    mapContainerStyle={mapStyles}*/}
      {/*    zoom={7}*/}
      {/*    center={defaultCenter}*/}
      {/*  >*/}
      {/*    <Marker*/}

      {/*      position={{defaultCenter}}*/}
      {/*     />*/}
      {/*  </GoogleMap>*/}
      {/*</LoadScript>*/}

      <Mapping
        google={props.google}
        zoom={14}
        disableDefaultUI={true}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
                name={'Current location'} />
      </Mapping>
    </div>

  );
};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCFkGulooYS0wMdguDDYE2bUt5iO8pkS-Y")
})(Map)
