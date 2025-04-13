import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BookmarkButton = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isBookmarked, setIsBookmarked] = useState(false);

  // Check localStorage on path change
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarkedPaths") || "[]");
    setIsBookmarked(stored.includes(currentPath));
  }, [currentPath]);

  const handleBookmark = () => {
    const stored = JSON.parse(localStorage.getItem("bookmarkedPaths") || "[]");

    if (stored.includes(currentPath)) {
      // Remove current path
      const updated = stored.filter((path) => path !== currentPath);
      localStorage.setItem("bookmarkedPaths", JSON.stringify(updated));
      setIsBookmarked(false);
    } else {
      // Add current path
      const updated = [...stored, currentPath];
      localStorage.setItem("bookmarkedPaths", JSON.stringify(updated));
      setIsBookmarked(true);
    }
  };

  return (
    <button
      onClick={handleBookmark}
      className="btn btn-primary ms-2 d-flex align-items-center gap-2"
      style={{ whiteSpace: "nowrap" }}
    >
      {isBookmarked ? (
        // Filled bookmark
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M2 2v13.5l6-3.5 6 3.5V2z" />
        </svg>
      ) : (
        // Empty bookmark outline
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 16 16"
        >
          <path d="M2 2v13.5l6-3.5 6 3.5V2z" />
        </svg>
      )}
      {isBookmarked ? "Bookmarked" : "Bookmark Page"}
    </button>
  );
};

export default BookmarkButton;
