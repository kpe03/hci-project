import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/BookmarkModal.css";

const BookmarkModal = ({ show, onClose }) => {
  const location = useLocation();
  const pageTitle = document.title || "Untitled Page";

  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState("");
  const [titleInput, setTitleInput] = useState(pageTitle);

  useEffect(() => {
    if (show) {
      setTitleInput(pageTitle);
  
      try {
        const raw = localStorage.getItem("bookmarkFolders");
        const parsed = raw ? JSON.parse(raw) : ["Publications"];
  
        if (Array.isArray(parsed) && parsed.length > 0) {
          setFolders(parsed);
          setSelectedFolder(parsed[0]);
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
  }, [show]);
  

  if (!show) return null;

  const handleBookmark = () => {
    if (!selectedFolder) {
      alert("Hold up — folder not ready yet. Try again.");
      return;
    }
  
    const current = JSON.parse(localStorage.getItem("bookmarkedPages") || "[]");
  
    const index = current.findIndex((b) => b.path === location.pathname);
  
    // Replace if it doesn't exist or if existing entry is missing folder
    if (index === -1 || !current[index].folder) {
      const newBookmark = {
        path: location.pathname,
        title: titleInput || pageTitle, // fallback to default title
        folder: selectedFolder,
      };
  
      if (index === -1) {
        current.push(newBookmark);
      } else {
        current[index] = newBookmark;
      }
  
      localStorage.setItem("bookmarkedPages", JSON.stringify(current));
      window.dispatchEvent(new Event("bookmarks-updated"));
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

        <label htmlFor="title-input">Bookmark Title:</label>
        <input
          id="title-input"
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          style={{ width: "100%", padding: "6px", marginBottom: "10px" }}
        />
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

        <button className="btn btn-secondary me-2" onClick={onClose}>
          Cancel
        </button>
        <button className="btn" onClick={handleBookmark} style = {{backgroundColor: "#2D9CDB", color: "white"}}>
          Yes, Bookmark it
        </button>
      </div>
    </div>
  );
};

export default BookmarkModal;
