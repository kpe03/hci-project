import React from "react";
import ResourceCard from "./Resources/ResourceCard";
import "./Services.css"


const resourceData = [
  {
    icon: "/resources-images/mywallet-button.jpg",
    title: "My Wallet",
    link: "./profile/my_wallet",
    description: "Automatic Renewals.",
  },
  {
    icon: "/resources-images/ambassadors_button.jpg",
    title: "Ambassadors for ACM",
    link: "./profile/ambasadors_for_acm",
    description: "Tell your colleagues about ACM.",
  },
  {
    icon: "/resources-images/techpacks.jpg",
    title: "Member Benefit",
    link: "./profile/member_benefits",
    description: "When you become a member, you become a part of the dynamic changes that are transforming our world by helping to shape the future of computing. Learn more!",
  },
  {
    icon: "/resources-images/membership-faq.jpg",
    title: "Customer Service FAQ",
    link: "./profile/customer_service_FAQ",
    description: "Our customer service is here to help, find quick answers in our FAQ.",
  },
  {
    icon: "/resources-images/dei-demographics.jpg",
    title: "My Demographic Information",
    link: "./profile/customer_service_FAQ",
    description: "This survey is designed to help ACM measure progress in relation to diversity, equity and inclusion (DEI), and to help us understand how we can best meet your individual needs.",
  },
];

const Services = () => {
    return (
      <div className="resource-section">
        <hr style={{ color: "#2D9CDB", width: "75%", margin: "0 auto", marginBottom: "3rem"}} />
        <div className="resource-grid">
          {resourceData.map((res, idx) => (
            <ResourceCard key={idx} {...res} />
          ))}
        </div>
      </div>
    );
  };

export default Services;

