import React from "react";
import "./css/NewsCard.css";

const NewsCard = ({ title, link, description }) => {
    return (
      <div className="news-card">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="news-title"
        >
          {title}
        </a>
        <p className="news-description">{description}</p>
      </div>
    );
  };

export default NewsCard;