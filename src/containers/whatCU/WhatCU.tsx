import React from 'react';
import { Feature } from '../../components';
import './whatCU.css';

const WhatCU = () => {
  return (
    <div className='cu__whatcu section__margin' id='wcu'>
      <div className='cu__whatcu-feature'>
        <Feature title="What is CU" text="CU is an Indian startup venture, attempting to manoeuvre in the field of social online meetup platform by introducing future matching. This application is dynamic, safe and personalised, having a specific user base to provide an unmatched experience. It breaks away from the conventional standards of online connection- We’ve designed this application to specifically cater to university students."/>
      </div>
      <div className='cu__whatcu-heading'>
        <h1 className='gradient__text'>Together We Revel</h1>
        <p>Explore the world together</p>
      </div>
      <div className='cu__whatcu-container'>
        <Feature title="Explore" text="Explore people with common interests and hobbies."/>
        <Feature title="Maps" text="Find people and events by using our multi-purpose map to show events and places to visit together."/>
        <Feature title="Date" text="Yes, You can Date here too. Date and explore on CU platform and have a social life balanced with fun of vising places."/>
      </div>
    </div>
  )
}

export default WhatCU