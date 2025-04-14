import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BookmarkButton = ({ onClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pageTitle = document.title || "Untitled Page";

  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarkedPages") || "[]");
    const alreadyExists = stored.some((b) => b.path === currentPath);
    setIsBookmarked(alreadyExists);
  }, [currentPath]);

  const handleBookmark = () => {
    const stored = JSON.parse(localStorage.getItem("bookmarkedPages") || "[]");
    const alreadyExists = stored.some((b) => b.path === currentPath);

    if (alreadyExists) {
      const updated = stored.filter((b) => b.path !== currentPath);
      localStorage.setItem("bookmarkedPages", JSON.stringify(updated));
      setIsBookmarked(false);
      // ❌ Don't show modal here
    } else {
      const updated = [...stored, { path: currentPath, title: pageTitle }];
      localStorage.setItem("bookmarkedPages", JSON.stringify(updated));
      setIsBookmarked(true);
      // ✅ Only trigger modal if it's a new bookmark
      if (onClick) onClick();
    }
  };

  return (
    <button
      onClick={handleBookmark}
      className="btn btn-primary ms-2 d-flex align-items-center gap-2"
      style={{ whiteSpace: "nowrap" }}
    >
      {isBookmarked ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2 2v13.5l6-3.5 6 3.5V2z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 16 16">
          <path d="M2 2v13.5l6-3.5 6 3.5V2z" />
        </svg>
      )}
      {isBookmarked ? "Bookmarked" : "Bookmark Page"}
    </button>
  );
};

export default BookmarkButton;
