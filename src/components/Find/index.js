import React, {useState} from 'react';
import Result from "./Result";
import Where from "./Where";
import Guests from "./Guests";

const Find = () => {
  const [whatOpen, setWhatOpen] = useState(0)

  const clickWrapperHandler = () => {
    if (whatOpen != 0) {
      setWhatOpen(0)
    }
  }

  return (
    <>
      <div onClick={clickWrapperHandler} className={whatOpen == 0 ? "helpWrapper" : "helpWrapper active"}></div>
      <div className="findEl">
        <Where setWhatOpen={setWhatOpen} whatOpen={whatOpen} />
        <div className="findEl__input">
          <div onChange={() => setWhatOpen(2)}>
            Dates
          </div>
        </div>
        <Guests setWhatOpen={setWhatOpen} whatOpen={whatOpen} />
        <Result />
      </div>
    </>
  );
};

export default Find;
