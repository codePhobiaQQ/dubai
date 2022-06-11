import React from 'react';

const MyStayResultElem = ({image}) => {
  return (
    <div className="MyStayResultElem">
      <div className="MyStayResultElemLeft">
        <img src={image} alt="apart"/>
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
