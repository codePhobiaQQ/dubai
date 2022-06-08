import React from 'react';

const DetailWhat = ({ advant }) => {
  return (
    <section className="DetailPageWhat">
      <div className="container">
        <div className="inner-left-container">
          <h3>What this place offers</h3>
          <ul>
            {advant.map((advand, index) => (
              <li key={"adv" + index}>
                <img src={advand.image} alt={"Adv" + index} />
                <span>{advand.text}</span>
              </li>
            ))}
          </ul>
          <button>
            Show all amenities
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailWhat;
