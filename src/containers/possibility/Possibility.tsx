import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="cu__possibility section__padding" id="possibility">
    <div className="cu__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="cu__possibility-content">
      <h4>Register Early to get Premium</h4>
      <h1 className="gradient__text">Boost you social life<br /> beyond your imagination</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium magni in cum, deleniti veniam consectetur qui quidem mollitia soluta quaerat et dignissimos dolorem facere consequatur culpa commodi, itaque earum.</p>
      <h4>Register Early to Get Started</h4>
    </div>
  </div>
);

export default Possibility;