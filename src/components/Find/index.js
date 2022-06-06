import React, {useState} from 'react';
import Guests from "./Guests";

const Find = () => {
  const [whatFindOpen, setWhatOpen] = useState(-1)

  return (
    <div className="findEl">
      <div className="findEl__input">
        <input onChange={() => setWhatOpen(1)} placeholder="Where are you going?" />
      </div>
      <div className="findEl__input">
        <input onChange={() => setWhatOpen(2)} placeholder="Dates" />
      </div>
      <div className="findEl__input">
        <input onChange={() => setWhatOpen(3)} placeholder="Guests" />
      </div>
      <Guests />
    </div>
  );
};

export default Find;
