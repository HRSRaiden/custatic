import React from 'react';
import Article from '../../components/article/Article';
import { internBanner, blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="cu__blog section__padding" id="blog">
    <div className="cu__blog-heading">
      <h1 className="gradient__text">We are coming soon, <br /> Wait for us.</h1>
    </div>
    <div className="cu__blog-container">
      <div className="cu__blog-container_groupA">
        <Article imgUrl={internBanner} date="Feb 05 2023" text="We are hiring for interns. Kindly email your resume and SOP on outreach@cumeetup.com " />
      </div>
      <div className="cu__blog-container_groupB">
        <Article imgUrl={blog01} date="     " text="Go to local events with friends and dates " />
        <Article imgUrl={blog03} date="     " text="Make groups and party with friends " />
        <Article imgUrl={blog04} date="     " text="Plan a mesmerizing date " />
        <Article imgUrl={blog05} date="     " text="Attend events in nightclubs and go to DJ nights " />
      </div>
    </div>
  </div>
);

export default Blog;