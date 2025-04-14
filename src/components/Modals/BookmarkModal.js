// components/BookmarkModal.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import './css/BookmarkModal.css'; // create custom styles if needed

const BookmarkModal = ({ show, onClose }) => {
  const location = useLocation();

  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h4>Bookmark This Page?</h4>
        <p>
          Path: <code>{location.pathname}</code>
        </p>
        <button className="btn btn-success me-2" onClick={() => {
          // simple localStorage logic
          const current = JSON.parse(localStorage.getItem("bookmarkedPages") || "[]");
          const exists = current.some(b => b.path === location.pathname);
          if (!exists) {
            current.push({ path: location.pathname, title: document.title });
            localStorage.setItem("bookmarkedPages", JSON.stringify(current));
          }
          onClose();
        }}>
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
