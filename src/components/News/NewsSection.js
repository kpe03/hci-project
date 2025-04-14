import React from "react";
import NewsCard from "./NewsCard.js";
import "./css/NewsSection.css";

const newsData = [
  {
    title: "Digital Dreams Have Become Nightmares: What We Must Do",
    link: "https://books.acm.org/titles#tab2170",
    description: "Digital Dreams Have Become Nightmares: What We Must Do by Ronald M. Baecker and Jonathan Grudin offers ...",
  },
  {
    title: "Ethical Quandaries in AI-ML: Facing the Tough Questions",
    link: "https://www.youtube.com/watch?v=Rl-4ybrH28U",
    description: "This talk was a follow-up to the April 19, 2023 webinar with Mehran Sahami of Stanford University, 'Confronting Ethical Challenges in a High-Tech World' Sabri...",
  },
  {
    title: "Pioneers in Artificial Intelligence Win the Nobel Prize in Physics",
    link: "https://apnews.com/article/nobel-prize-physics-fc0567de3f2ca45f81a7359a017cd542",
    description: "Two pioneers of artificial intelligence—John Hopfield and Geoffrey Hinton—won the Nobel Prize in physics Tuesday for helping create the building blocks of machine learning.",
  },
  {
    title: "Why Prof. Amruth Kumar Wants to Make Ethics 'Unavoidable' in Computer Science",
    link: "https://www.itbrew.com/stories/2024/06/27/why-prof-amruth-kumar-wants-to-make-ethics-unavoidable-in-computer-science",
    description: "Tomorrow’s computer class will likely have a lot more conversation if new curricula recs are followed.",
  },
  {
    title: "Duke professor says her supercomputing simulations can help device developers",
    link: "https://www.medicaldesignandoutsourcing.com/duke-amanda-randles-supercomputing-simulations-device-developers/",
    description: "Amanda Randles, an associate professor of biomedical sciences at Duke University, has developed computational methods that create...",
  },
  {
    title: "Could Antitrust Probes Lead to AI Market Upheaval?",
    link: "https://www.informationweek.com/machine-learning-ai/could-antitrust-probes-lead-to-ai-market-upheaval-#close-modal",
    description: "The DOJ and FTC are launching antitrust investigations into AI market titans Microsoft, OpenAI, and Nvidia.",
  },
];

const News = () => {
    return (
      <div>
        <h2 className="news-heading">News</h2>
        <hr style={{ color: "#2D9CDB", width: "75%", margin: "0 auto", marginBottom: "3rem"}} />
        <div className="news-grid">
          {newsData.map((res, idx) => (
            <NewsCard key={idx} {...res} />
          ))}
        </div>
        <div className="news-footer">
        <a
          className="news-see-more"
          href="https://www.acm.org/media-center/acm-in-the-news"
          role="link">
          See more news articles
        </a>
      </div>
      
      </div>
    );
  };

export default News;
