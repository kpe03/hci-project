import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/BookmarkModal.css";

const BookmarkModal = ({ show, onClose }) => {
  const location = useLocation();
  const pageTitle = document.title || "Untitled Page";

  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");

  // 👇 This runs every time the modal is shown
  useEffect(() => {
    if (show) {
      try {
        const raw = localStorage.getItem("bookmarkFolders");
        const parsed = raw ? JSON.parse(raw) : ["Publications"];

        if (Array.isArray(parsed) && parsed.length > 0) {
          setFolders(parsed);
          setSelectedFolder(parsed[0]); // Default to first
        } else {
          setFolders(["Publications"]);
          setSelectedFolder("Publications");
        }
      } catch (err) {
        console.error("Could not parse bookmarkFolders:", err);
        setFolders(["Publications"]);
        setSelectedFolder("Publications");
      }
    }
  }, [show]); // 👈 Re-run when `show` changes

  if (!show) return null;

  const handleBookmark = () => {
    const current = JSON.parse(localStorage.getItem("bookmarkedPages") || "[]");
    const exists = current.some((b) => b.path === location.pathname);
    if (!exists) {
      current.push({
        path: location.pathname,
        title: pageTitle,
        folder: selectedFolder,
      });
      localStorage.setItem("bookmarkedPages", JSON.stringify(current));
    }
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h4>Bookmark This Page?</h4>
        <p>
          Path: <code>{location.pathname}</code>
        </p>

        <label htmlFor="folder-select">Select Folder:</label>
        <select
          id="folder-select"
          value={selectedFolder}
          onChange={(e) => setSelectedFolder(e.target.value)}
          style={{ marginTop: "5px", marginBottom: "10px", width: "100%" }}
        >
          {folders.map((f, idx) => (
            <option key={idx} value={f}>
              {f}
            </option>
          ))}
        </select>

        <button className="btn btn-success me-2" onClick={handleBookmark}>
          Yes, Bookmark it
        </button>
        <button className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BookmarkModal;
