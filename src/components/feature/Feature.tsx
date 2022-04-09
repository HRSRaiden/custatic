import React from 'react';
import './feature.css';

interface Featurex{
  title: string;
  text: string;
}
const Feature = ({title,text}:Featurex) => {
  return (
    <div className="cu__features-container__feature">
    <div className="cu__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="cu__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature