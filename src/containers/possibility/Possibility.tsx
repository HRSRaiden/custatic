import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="cu__possibility section__padding" id="possibility">
    <div className="cu__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="cu__possibility-content">
      {/* <h4>Register Early to get Premium</h4> */}
      <h1 className="gradient__text">Boost you social life<br /> beyond your imagination</h1>
      {/* <p>os dolorem facere consequatur culpa commodi, itaque earum.</p> */}
      <h4>Coming soon...</h4>
    </div>
  </div>
);

export default Possibility;