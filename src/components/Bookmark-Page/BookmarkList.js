import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/BookmarkPage.css";

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarkedPages") || "[]");
    setBookmarks(stored);
  }, []);

  return (
    <div>
      <div className="space-y-3">
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
          <div style={{fontSize: "20px"}}>
            My Publications
          </div>
        </div>

        <div className="ml-6 space-y-1 text-sm text-gray-700">
          {bookmarks.length > 0 ? (
            bookmarks.map((b, i) => (
              <div key={i}>
                → <Link to={b.path} className="hover:underline text-blue-700">{b.title}</Link>
              </div>
            ))
          ) : (
            <div className="italic text-gray-400">No bookmarks yet</div>
          )}
        </div>
        <div style = {{marginTop: "10px"}}>
          <button className="bookmark-add-button">+ Add New List</button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkList;
