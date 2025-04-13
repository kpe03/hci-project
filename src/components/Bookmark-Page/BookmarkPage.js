// src/pages/BookmarkPage.jsx
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
      <h1 className="bookmark-title">My Bookmarks</h1>

      <div className="bookmark-panels-container">
        <div className="bookmark-panel">
          <BookmarksList />
        </div>
        <div className="bookmark-panel">
          <RecentlyBookmarked />
        </div>
      </div>
    </div>
  );
};

export default BookmarkPage;
