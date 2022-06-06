import React, {useState} from 'react';

const Where = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const whereHandler = (e) => {
    props.setWhatOpen(1)
    console.log(e.target.value)
    if (e.target.value.length > 0 && isPopupOpen == false) {
      setIsPopupOpen(true)
    }
  }

  console.log("here")

  return (
    <div className="findEl__input">
      <input onChange={(e) => whereHandler(e)} placeholder="Where are you going?" />
      <div className={isPopupOpen ? "wherePopup active popup" : "wherePopup popup"}>
        <ul>
          <li>
            Burj Al Arab
          </li>
          <li>
            Jumeirah Burj Al Arab
          </li>
          <li>
            Dubai Burj Al Arab
          </li>
          <li>
            Dubai Burj Al Arab
          </li>
          <li>
            Dubai Burj Al Arab
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Where;
