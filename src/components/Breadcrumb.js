import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Handles path formatting and display text for special cases
  const formatPathDisplay = (path) => {
    // Format like "acm" to "ACM" or "code-of-ethics" to "Code of Ethics"
    if (path === "acm") return "ACM";
    
    return path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-container bg-light py-2 px-3">
      <div className="container-fluid">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          
          {pathnames.map((value, index) => {
            // Build the URL for this level
            const url = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            
            return isLast ? (
              <li 
                key={url} 
                className="breadcrumb-item active" 
                aria-current="page"
              >
                {formatPathDisplay(value)}
              </li>
            ) : (
              <li key={url} className="breadcrumb-item">
                <Link to={url}>{formatPathDisplay(value)}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;