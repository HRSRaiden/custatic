import React from 'react';
import './article.css';

interface Articlex {
  imgUrl:string;
  date:string;
  text: string;
}
const Article = ({ imgUrl, date, text }:Articlex) => (
  <div className="cu__blog-container_article">
    <div className="cu__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="cu__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>@CU Meet Up</p>
    </div>
  </div>
);

export default Article;