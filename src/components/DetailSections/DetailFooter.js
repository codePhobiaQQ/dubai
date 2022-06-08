import React from 'react';

const DetailFooter = ({ things }) => {
  return (
    <section className="DetailPageThings">
      <div className="container">
        <div className="inner-left-container">
          <h3>What this place offers</h3>
          <ul>
            {things.map((thing, index) => (
              <li key={"thing" + index}>
                {thing.image && <img src={thing.image} alt={"Thing" + index} />}
                <span>{thing.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DetailFooter;
