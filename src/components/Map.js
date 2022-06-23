import React from 'react';
// import metka from "../assets/metka.svg"
import apart1 from "../assets/apart1.jpg"
import {Map as Mapping, InfoWindow, Polyline, Marker, GoogleApiWrapper} from 'google-maps-react';


const Map = (props) => {
  const defaultProps = {
    center: {
      lat: 101.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const triangleCoords = [
    {lat: 25.774, lng: -80.190},
    {lat: 18.466, lng: -66.118},
    {lat: 32.321, lng: -64.757},
    {lat: 25.774, lng: -80.190}
  ];

  return (
    <>


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

      <Mapping
        google={props.google}
        zoom={14}
        disableDefaultUI={true}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >

        <Polyline
          path={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />

        {/*<Marker*/}
        {/*  name={'Current location'}*/}
        {/*>*/}
          {/*<InfoWindow>*/}
          {/*  <div>*/}
          {/*    <h1>test</h1>*/}
          {/*  </div>*/}
          {/*</InfoWindow>*/}
        {/*</Marker>*/}


        {/*<InfoWindow>*/}
        {/*  <div>*/}
        {/*    <h1>test</h1>*/}
        {/*  </div>*/}
        {/*</InfoWindow>*/}

      </Mapping>
    </div>
    </>

  );
};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCFkGulooYS0wMdguDDYE2bUt5iO8pkS-Y")
})(Map)
