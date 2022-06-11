import React from 'react';
import apart from './../../assets/apart1.jpg';

const MyStayResultElem = () => {
  return (
    <div className="MyStayResultElem">
      <div className="MyStayResultElemLeft">
        <img src={apart} alt="apart"/>
        <div className="MyStayResultElemLeftContent">
          left
        </div>
      </div>
      <div className="MyStayResultElemRight">
        right
      </div>
    </div>
  );
};

export default MyStayResultElem;
