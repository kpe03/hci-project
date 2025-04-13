import React from "react";
import ResourceCard from "./ResourceCard";
import "./css/ResourceSection.css"


const resourceData = [
  {
    icon: "/resources-images/acm-digital-library.png",
    title: "Digital Library",
    link: "https://dl.acm.org/",
    description: "The ACM Digital Library is a research, discovery and networking platform.",
  },
  {
    icon: "/resources-images/cacm.png",
    title: "CACM",
    link: "https://cacm.acm.org/",
    description: "Communications of the ACM is the leading print publication for computing and IT fields.",
  },
  {
    icon: "/resources-images/acm-queue.png",
    title: "Queue",
    link: "https://queue.acm.org/",
    description: "Queue is the ACM’s magazine for practicing software engineers.",
  },
  {
    icon: "/resources-images/acm-technews.jpg",
    title: "TechNews",
    link: "https://technews.acm.org/",
    description: "ACM TechNews provides timely information for computer professionals three times a week.",
  },
];

const Resources = () => {
    return (
      <div className="resource-section">
        <h2 className="resource-heading">Resources</h2>
        <div className="resource-grid">
          {resourceData.map((res, idx) => (
            <ResourceCard key={idx} {...res} />
          ))}
        </div>
      </div>
    );
  };

export default Resources;
