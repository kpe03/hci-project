import React from "react";
import { Link } from "react-router-dom";
import "./ProfileNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        {/* Left Side - Logo and Title */}
        <div className="d-flex align-items-center">
          <img
            src="acm_logo.png"
            className="me-2"
            style={{ height: "40px" }}
            alt="ACM logo"
          />
          <Link className="navbar-brand" to="/" style={{ fontSize: "15px" }}>
            Association for Computing Machinery
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
                        {/* Profile Button in Center */}
                        <li className="nav-item">
              <Link to="/profile" className="btn btn-info navbar-profile-btn">
                Profile
              </Link>
            </li>

            {/* Other Sections */}
            {[
              "Awards & Recognition",
              "Ethics",
              "Learning",
              "ACM News a& Newsletter",
            ].map((section) => (
              <li key={section} className="nav-item dropdown navbar-content">
                <a
                  className="nav-link dropdown-toggle"
                  href={`/${section.toLowerCase()}`}
                  role="button"
                  data-bs-toggle="dropdown">
                  {section}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item dropdown-link"
                      href={`/${section.toLowerCase()}/option1`}>
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item dropdown-link"
                      href={`/${section.toLowerCase()}/option2`}>
                      Option 2
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Logout Button */}
        <div className="d-flex">
          <Link to="/login" className="btn btn-primary me-2">
            Log out
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
