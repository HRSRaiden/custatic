import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '3 Step KYC',
    text: 'Using an inhouse AI BOUNCERS, CU makes sure the CROWD is always vibrant and real',
  },
  {
    title: 'MAP Tracker',
    text: 'An interactive tool that makes sure the buzzy events are not left unbuzzed',
  },
  {
    title: 'Explore Events',
    text: 'Explore events happening around you and visit with friends. Find people with common interests and invite them to go to events together.',
  },
  {
    title: 'Advance Booking',
    text: "Book seats for events in advance so that you get the best out of it.",
  },
];

const Features = () => (
  <div className="cu__features section__padding" id="features">
    <div className="cu__features-heading">
      <h1 className="gradient__text">We provide...</h1>
      <p>Coming soon...</p>
    </div>
    <div className="cu__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;