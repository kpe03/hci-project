import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './css/BookmarkPage.css';

const BookmarkPage = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (location.state && location.state.isLoggedIn !== undefined) {
      setIsLoggedIn(location.state.isLoggedIn);
    }
  }, [location]);

  return (
    <div className="bookmark-page-container">
      <h1 className="bookmark-title">My Bookmarks</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Panel - Bookmark Lists */}
        <div>
          <h2 className="bookmark-panel-heading">Bookmark Lists →</h2>
          <div className="space-y-3">
            {["My Publications", "International Conference Proceedings", "Cybersecurity", "2025 Papers"].map((title) => (
              <div key={title} className="bookmark-list">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="bookmark-svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 4a2 2 0 012-2h5l2 2h7a2 2 0 012 2v1H2V4zM2 8v8a2 2 0 002 2h12a2 2 0 002-2V8H2z" />
                </svg>
                {title}
              </div>
            ))}
            <button className="bookmark-add-button">+ Add New List</button>
          </div>
        </div>

        {/* Right Panel - Recently Bookmarked */}
        <div>
          <h2 className="bookmark-panel-heading">Recently Bookmarked →</h2>
          <div className="space-y-3">
            <div className="recent-bookmark">
              <a href="#">Handling Feature Heterogeneity with Learnable...</a>
              <p>Author | Added 4/12/2025</p>
            </div>
            <div className="recent-bookmark">
              <a href="#">Verifier's Dilemma in Proof-of-Work Public...</a>
              <p>Author | Added 4/12/2025</p>
            </div>
          </div>
        </div>
      </div>

      {!isLoggedIn && (
        <p className="mt-10 text-red-500">
          You must be logged in to save and sync bookmarks.
        </p>
      )}
    </div>
  );
};

export default BookmarkPage;
