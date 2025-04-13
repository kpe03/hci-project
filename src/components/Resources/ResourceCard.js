import React from "react";
import "./css/ResourceCard.css";

const ResourceCard = ({ icon, title, link, description }) => {
    return (
      <div className="resource-card">
        <img src={icon} alt={`${title} logo`} className="resource-icon" />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-title"
        >
          {title}
        </a>
        <p className="resource-description">{description}</p>
      </div>
    );
  };

export default ResourceCard;
