import React from 'react';
import adv1 from "../assets/ThirdPage/ocean.svg";
import adv2 from "../assets/ThirdPage/vilk.svg";
import adv3 from "../assets/ThirdPage/comp.svg";
import adv4 from "../assets/ThirdPage/sneg.svg";
import adv5 from "../assets/ThirdPage/wifi.svg";
import adv6 from "../assets/ThirdPage/washmachine.png";
import adv7 from "../assets/ThirdPage/car.svg";
import thing1 from "../assets/ThirdPage/clock.svg";
import thing5 from "../assets/ThirdPage/voln.svg";
import thing6 from "../assets/ThirdPage/bell.svg";
import thing2 from "../assets/ThirdPage/smoking.svg";
import thing3 from "../assets/ThirdPage/dog.svg";
import thing4 from "../assets/ThirdPage/congrit.svg";
import Header from "../hoc/Header";
import DetailHeader from "../components/DetailSections/DetailHeader";
import DetailPageInfo from "../components/DetailSections/DetailPageInfo";
import DetailWhat from "../components/DetailSections/DetailWhat";
import DetailWhere from "../components/DetailSections/DetailWhere";
import DetailFooter from "../components/DetailSections/DetailFooter";

const DetailsPageNew = () => {
  const advant = [
    {
      image: adv1,
      text: "Ocean view"
    },
    {
      image: adv1,
      text: "Ocean view"
    },
    {
      image: adv2,
      text: "Kitchen"
    },
    {
      image: adv2,
      text: "Kitchen"
    },
    {
      image: adv3,
      text: "Dedicated workspace"
    },
    {
      image: adv3,
      text: "Dedicated workspace"
    },
    {
      image: adv4,
      text: "Air conditioning"
    },
    {
      image: adv4,
      text: "Air conditioning"
    },
    {
      image: adv5,
      text: "Wifi"
    },
    {
      image: adv5,
      text: "Wifi"
    },
    {
      image: adv6,
      text: "Washing machine"
    },
    {
      image: adv6,
      text: "Washing machine"
    },
    {
      image: adv7,
      text: "Free on-street parking"
    },
    {
      image: adv7,
      text: "Free on-street parking"
    },
  ]
  const things = [
    {
      image: thing1,
      text: "Check-in: 14:00-21:00"
    },
    {
      image: thing5,
      text: "Nearby lake, river, other body of water"
    },
    {
      image: thing1,
      text: "Check-out: 12:00"
    },
    {
      image: thing6,
      text: "Carbon monoxide alarm"
    },
    {
      image: thing2,
      text: "No smoking"
    },
    {
      image: thing6,
      text: "Smoke alarm"
    },
    {
      image: thing3,
      text: "No pets"
    },
    {
      image: adv4,
      text: "This reservation is non-refundable"
    },
    {
      image: thing4,
      text: "No parties or events"
    },
  ]
  const navigation = [
    {
      text: "Entire unit"
    },
    {
      text: "Living area"
    },
    {
      text: "Bedroom area"
    },
    {
      text: "Bathroom"
    },
    {
      text: "Kitchen"
    },
    {
      text: "Exterior"
    }
  ]

  return (
    <Header>
      <DetailHeader navigation={navigation} />
      <DetailPageInfo secondType={true} />
      <DetailWhat advant={advant} />
      <DetailWhere />
      <DetailFooter things={things} />
    </Header>
  );
};

export default DetailsPageNew;
