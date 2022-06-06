import React from 'react';

const Where = (props) => {
  const whereHandler = (e) => {
    if (e.target.value.length > 0 && props.whatOpen != 1) {
      props.setWhatOpen(1)
    } else if (e.target.value.length > 0 == 0) {
      props.setWhatOpen(0)
    }
  }

  return (
    <div className="findEl__input">
      <div className={props.whatOpen == 1 ? "findEl__where-label active" : "findEl__where-label"}>
        Where are you going?
      </div>
      <input onClick={whereHandler} onChange={whereHandler} placeholder="Where are you going?" />
      <div className={props.whatOpen == 1 ? "wherePopup active popup" : "wherePopup popup"}>
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
