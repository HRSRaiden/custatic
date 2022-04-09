import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import chill from '../../assets/chill.png';
const Header = () => {
  return (
    <div className='cu__header section__padding' id='home'>
      <div className='cu__header-content'>
        <h1 className='gradient__text'>Welcome to CU, a community to learn, grow and have fun together.</h1>
        <p>We are currently looking for people to share their public meeting experiences with us in photographs and description to build a community. These contents will be open source and will help build our community. Community partners will get perks like free premium membership for 4 months.</p>
        <div className='cu__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button  >
        </div>
        <div className='cu__header-content__people'>
          <img src={people} alt='people' />    
          <p>526 people have supported in building CU community in 24 hours</p>      
        </div>
      </div>
      <div className='cu__header-image'>
        <img src={chill} alt="friends  " />
      </div>
      </div>
  )
}

export default Header