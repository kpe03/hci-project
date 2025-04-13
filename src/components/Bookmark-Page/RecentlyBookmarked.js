import React from "react";

const RecentlyBookmarked = () => {
  // Static demo content for now — can connect this to state/localStorage later
  const recentItems = [
    {
      title: "Handling Feature Heterogeneity with Learnable...",
      author: "Author",
      date: "4/12/2025",
    },
    {
      title: "Verifier's Dilemma in Proof-of-Work Public...",
      author: "Author",
      date: "4/12/2025",
    },
  ];

  return (
    <div>
      <h2 className="bookmark-panel-heading">Recently Bookmarked →</h2>
      <div className="space-y-3">
        {recentItems.map((item, index) => (
          <div key={index} className="recent-bookmark">
            <a href="#" className="hover:underline text-blue-800 font-medium">
              {item.title}
            </a>
            <p className="text-sm text-gray-600">
              {item.author} | Added {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyBookmarked;
