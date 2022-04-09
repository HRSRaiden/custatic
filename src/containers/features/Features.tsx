import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Go to places with friends',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis eligendi at sed minus, iure iusto, nam inventore delectus cupiditate pariatur exercitationem quia eos cumque perferendis veniam fugit. Molestias, blanditiis!',
  },
  {
    title: 'Explore people near you',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis eligendi at sed minus, iure iusto, nam inventore delectus cupiditate pariatur exercitationem quia eos cumque perferendis veniam fugit. Molestias, blanditiis!',
  },
  {
    title: 'Explore people with common interests',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis eligendi at sed minus, iure iusto, nam inventore delectus cupiditate pariatur exercitationem quia eos cumque perferendis veniam fugit. Molestias, blanditiis!',
  },
  {
    title: 'And More',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corporis eligendi at sed minus, iure iusto, nam inventore delectus cupiditate pariatur exercitationem quia eos cumque perferendis veniam fugit. Molestias, blanditiis!',
  },
];

const Features = () => (
  <div className="cu__features section__padding" id="features">
    <div className="cu__features-heading">
      <h1 className="gradient__text">Breaking the taboo of swiping just to date (why taboo, I don't know)</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="cu__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;