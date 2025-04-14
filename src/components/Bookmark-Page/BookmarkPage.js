import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookmarksList from "./BookmarkList";
import RecentlyBookmarked from "./RecentlyBookmarked";
import "./css/BookmarkPage.css";

const BookmarkPage = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (location.state?.isLoggedIn !== undefined) {
      setIsLoggedIn(location.state.isLoggedIn);
    }
  }, [location]);

  return (
    <div className="bookmark-page-container">
     

      <div className="bookmark-panels-container">
        <div className="bookmark-panel">
          <h2 className="bookmark-section-header">My Bookmarks</h2>
          <BookmarksList />
        </div>

        <div className="bookmark-panel">
          <h2 className="bookmark-section-header">Recently Bookmarked</h2>
          <RecentlyBookmarked />
        </div>
      </div>
    </div>
  );
};

export default BookmarkPage;
