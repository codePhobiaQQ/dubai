import React, {useEffect, useState, useRef} from 'react';
import { Link } from "react-router-dom";
import apart1 from "./../assets/apart1.jpg"
import apart2 from "./../assets/apart2.jpg"
import apart3 from "./../assets/apart3.jpg"
import apart4 from "./../assets/apart4.jpg"
import useWindowSize from "../hooks/useWindowSize";

const ApartmentsList = () => {
  const { height, width } = useWindowSize()
  const apartList = useRef(null)

  useEffect(() => {
    if (apartList.current) {
      apartList.current.setAttribute("style",
        `height: calc(${window.innerHeight - apartList.current.offsetTop}px - 1vh - 1vw);`
      )
    }
  }, [apartList.current, height, width])

  const apartments = [
    {
      name: "Deluxe Marina Flat",
      rooms: "2 rooms",
      size: "170 m2",
      date: "26 May – 4 June",
      price: "12 280",
      nights: "6",
      image: apart1
    },
    {
      name: "Deluxe Marina Flat",
      rooms: "2 rooms",
      size: "170 m2",
      date: "26 May – 4 June",
      price: "12 280",
      nights: "6",
      image: apart2
    },
    {
      name: "Deluxe Marina Flat",
      rooms: "2 rooms",
      size: "170 m2",
      date: "26 May – 4 June",
      price: "12 280",
      nights: "6",
      image: apart3
    },
    {
      name: "Deluxe Marina Flat",
      rooms: "2 rooms",
      size: "170 m2",
      date: "26 May – 4 June",
      price: "12 280",
      nights: "6",
      image: apart4
    }
  ]



  return (
    <div className="ApartmentsList">
      <h2 className="ApartmentsList__title">Apartments</h2>
      <ul ref={apartList} className="ApartmentsList__els">
        {apartments.map((apart, index) => (
          <li key={"apartment" + index} className="ApartmentsList__el">
            <img className="ApartmentsList__image" src={apart.image} alt="Apart1"/>
            <div className="ApartmentsList__content-wrapper">
              <div className="ApartmentsList__content-left">
                <h3 className="ApartmentsList__name">{apart.name}</h3>
                <div className="ApartmentsList__content-left-info">
                  <span>
                    {apart.rooms + " "}
                    {apart.size}
                  </span>
                  <span>
                    {apart.date}
                  </span>
                </div>
              </div>
              <div className="ApartmentsList__content-right">
                <Link to={"/details"}>
                  <span>{apart.price}</span>
                  <span>{apart.nights + " nights"}</span>
                </Link>
              </div>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default ApartmentsList;
