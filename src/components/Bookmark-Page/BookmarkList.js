import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/BookmarkPage.css";

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [folders, setFolders] = useState(["Publications"]);

  useEffect(() => {
    // Load bookmarks and folders from localStorage
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarkedPages") || "[]");
    const storedFolders = JSON.parse(localStorage.getItem("bookmarkFolders") || '["Publications"]');

    // Clean invalid bookmarks
    const cleaned = storedBookmarks.filter(
      (b) => b && typeof b === "object" && b.path && b.title
    );

    setBookmarks(cleaned);
    setFolders(storedFolders);
  }, []);

  const handleAddFolder = () => {
    const newTitle = prompt("Enter a name for the new list:");
    if (newTitle && newTitle.trim() !== "") {
      const updatedFolders = [...folders, newTitle.trim()];
      setFolders(updatedFolders);
      localStorage.setItem("bookmarkFolders", JSON.stringify(updatedFolders));
    }
  };

  return (
    <div>
      <div className="space-y-3">
        {folders.map((folder, idx) => (
          <div key={idx}>
            <div className="bookmark-list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bookmark-svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width={"25px"}
              >
                <path d="M2 4a2 2 0 012-2h5l2 2h7a2 2 0 012 2v1H2V4zM2 8v8a2 2 0 002 2h12a2 2 0 002-2V8H2z" />
              </svg>
              <div style={{ fontSize: "20px" }}>{folder}</div>
            </div>

            {/* Show only bookmarks assigned to this folder */}
            <div className="ml-6 space-y-1 text-sm text-gray-700">
              {bookmarks.filter(b => b.folder === folder).length > 0 ? (
                bookmarks
                  .filter(b => b.folder === folder)
                  .map((b, i) => (
                    <div key={i}>
                      →{" "}
                      <Link to={b.path} className="hover:underline text-blue-700">
                        {b.title}
                      </Link>
                    </div>
                  ))
              ) : (
                <div className="italic text-gray-400">No bookmarks yet</div>
              )}
            </div>
          </div>
        ))}

        <div style={{ marginTop: "10px" }}>
          <button className="bookmark-add-button" onClick={handleAddFolder}>
            + Add New List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkList;
