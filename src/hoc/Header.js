import React from 'react';

const Header = (props) => {
  return (
    <>
      <header className="header">
        Header
      </header>
      {props.children}
    </>
  );
};

export default Header;
