import React from "react";

const BookmarkList = () => {
  const folderTitles = [
    "My Publications",
    "International Conference Proceedings",
    "Cybersecurity",
    "2025 Papers",
  ];

  return (
    <div>
      <h2 className="bookmark-panel-heading">Bookmark Lists →</h2>
      <div className="space-y-3">
        {folderTitles.map((title) => (
          <div key={title} className="bookmark-list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bookmark-svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width={"25px"}
            >
              <path d="M2 4a2 2 0 012-2h5l2 2h7a2 2 0 012 2v1H2V4zM2 8v8a2 2 0 002 2h12a2 2 0 002-2V8H2z" />
            </svg>
            {title}
          </div>
        ))}
        <button className="bookmark-add-button">+ Add New List</button>
      </div>
    </div>
  );
};

export default BookmarkList;
