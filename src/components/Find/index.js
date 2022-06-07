import React, {useState} from 'react';
import Result from "./Result";
import Where from "./Where";
import Guests from "./Guests";
import Date from "./Date";

const Find = (props) => {
  const [whatOpen, setWhatOpen] = useState(0)

  const clickWrapperHandler = () => {
    if (whatOpen != 0) {
      setWhatOpen(0)
    }
  }

  return (
    <>
      <div onClick={clickWrapperHandler} className={whatOpen == 0 ? "helpWrapper" : "helpWrapper active"}></div>
      <div className={props.isMain ? "findEl" : "findEl findEl_second"}>
        <Where setWhatOpen={setWhatOpen} whatOpen={whatOpen} />
        <Date setWhatOpen={setWhatOpen} whatOpen={whatOpen} />
        <Guests setWhatOpen={setWhatOpen} whatOpen={whatOpen} />
        <Result />
      </div>
    </>
  );
};

export default Find;
