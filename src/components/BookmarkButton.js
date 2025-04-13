import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BookmarkButton = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isBookmarked, setIsBookmarked] = useState(false);

  // On mount, check if this page is already bookmarked
  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarkedPages") || "[]");
    setIsBookmarked(bookmarks.includes(currentPath));
  }, [currentPath]);

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarkedPages") || "[]");

    if (!bookmarks.includes(currentPath)) {
      const updatedBookmarks = [...bookmarks, currentPath];
      localStorage.setItem("bookmarkedPages", JSON.stringify(updatedBookmarks));
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
      Bookmark Page
    </button>
  );
};

export default BookmarkButton;
