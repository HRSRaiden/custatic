import React from 'react';
import cuLogo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="cu__footer section__padding">
    <div className="cu__footer-heading">
      <h1 className="gradient__text">Let's build a community together</h1>
    </div>

    {/* <div className="cu__footer-btn">
      <p>Register Now</p>
    </div> */}

    <div className="cu__footer-links">
      <div className="cu__footer-links_logo">
        <img src={cuLogo} alt="cu_logo" />
        <p>CU, <br /> All Rights Reserved</p>
      </div>
      <div className="cu__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="cu__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="cu__footer-links_div">
        <h4>Get in touch</h4>
        <p>Harsh Sharma</p>
        <p>outreach@cumeetup.com</p>
        <p>hrs.cumeetup@gmail.com</p>
      </div>
    </div>

    <div className="cu__footer-copyright">
      <p>@2022 cumeetup. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;