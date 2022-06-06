import React, {useState} from 'react';
import Result from "./Result";
import Where from "./Where";

const Find = () => {
  const [whatFindOpen, setWhatOpen] = useState(-1)

  return (
    <div className="findEl">
      <Where setWhatOpen={setWhatOpen} />
      <div className="findEl__input">
        <div onChange={() => setWhatOpen(2)}>
          Dates
        </div>

      </div>
      <div className="findEl__input">
        <div onChange={() => setWhatOpen(3)}>
          Guests
        </div>
      </div>
      <Result />
    </div>
  );
};

export default Find;
