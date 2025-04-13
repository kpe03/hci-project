import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext"; 
import { Link } from "react-router-dom";
import "./ProfileNavbar.css";
import logo from "../assets/images/acm-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function ProfileNavbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const AwardsAndRecognitionItems = [
    {label: "How to Nominate: ACM Fellows", link: "/profile/awards&recgognition/nominate_acm_fellows"},
    {label: "How to Nominate: ACM Distinguished Members", link: "/profile/awards&recgognition/nominate_distinguished_members"},
    {label: "How to Nominate: ACM Senior Members", link: "/profile/awards&recgognition/nominate_senior_members"},
    {label: "Listing of Advanced Member Grade Recipients", link: "/profile/awards&recgognition/advanced_member_grade_recipients"},
    {label: "Listing of Latest ACM Awards Recipients", link: "/profile/awards&recgognition/latest_awards_recipients"},
    {label: "All ACM Awards Recipients", link: "/profile/awards&recgognition/all_awards_recipients"},
  ];
  /* To create all the links in the dropdown of the Navbar */
  const ethicsItems = [{label: "ACM Code of Ethics & Professional Conduct", link: "/profile/ethics/code_of_ethics_&_profssional_conduct"},
    {label: "Ethics & Plagiarism", link: "/profile/ethics/ethics_&_plagiarism"},
    {label: "Stop Harassment", link: "/profile/ethics/stop_harassment"},
    {label: "ACM Committee on Professional Ethics", link: "/profile/ethics/committee_on_professional_ethics"}
  ];

  const learningItems = [
    {label: "ByteCast", link: "/profile/learning/ByteCast"},
    {label: "TechTalks", link: "/profile/learning/TechTalks"},
    {label: "Pluralsight", link: "/profile/learning/Pluralsight"},
    {label: "Skillsoft Percipio", link: "/profile/learning/Skillsoft_Percipio"}
  ];

  
  const newsItems = [
    {label: "ACM Media Center", link: "/profile/acm_news_&_newsletter/ACM_Media_Center"},
    {label: "News Releases", link: "/profile/acm_news_&_newsletter/News_Releases"},
    {label: "TechNews", link: "/profile/acm_news_&_newsletter/TechNews"},
    {label: "MemberNet", link: "/profile/acm_news_&_newsletter/MemberNet"},
    {label: "People of ACM", link: "/profile/acm_news_&_newsletter/People_of_ACM"}
  ];
  /* -------------------------------------- */

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const makeLink = (linkRoute, linkName) => {
    return (
        <a
        className="dropdown-item dropdown-link"
        href={linkRoute}>
        {linkName}
      </a>
    );
  }

  const makeDropdown = (title, dropdownItems) => {
    return (
      <li key={title} className="nav-item dropdown navbar-content nav-item-spaced">
                <a
                  className="nav-link dropdown-toggle"
                  href={`/${title.toLowerCase()}`}
                  role="button"
                  data-bs-toggle="dropdown">
                  {title}
                </a>
                <ul className="dropdown-menu multi-column-dropdown">
                 {dropdownItems.map((item) => (
                    <li key={item.label}>
                      {makeLink(item.link, item.label)}
                    </li>
                 ))}
                </ul>
              </li>
    );}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 border-color">
      <div className="container-fluid">
        {/* Left Side - Logo and Title */}
        <div className="d-flex align-items-center">
          <img
            src={logo}
            className="me-2"
            style={{ height: "40px" }}
            alt="ACM logo"
          />
          <Link className="navbar-brand" to="/" 
            style={{
              fontSize: "15px",
              whiteSpace: "normal",
              display: "inline-block", 
              maxWidth: "160px",       
              textAlign: "left"
            }}>
            Association for Computing Machinery
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarContent">
          <ul className="navbar-nav dropdown-link">
         
            {makeDropdown("Awards & Recognition", AwardsAndRecognitionItems)}
            {makeDropdown("Ethics", ethicsItems)}
            {makeDropdown("Learning ", learningItems)}
            {makeDropdown("ACM News & Newsletters", newsItems)}
          </ul>

          {/* Login & Join Buttons - Inside collapsed menu on mobile */}
          <div className="d-flex d-lg-none mt-3">
            {isLoggedIn ? (
              <div className="d-flex flex-column w-100">
                <Link className="btn btn-outline-light mb-2" to="/profile">
                  Profile
                </Link>
                <Link className="btn btn-outline-light mb-2" to="/settings">
                  Settings
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            ) : (
              <div className="d-flex flex-column w-100">
                <Link to="/profile" className="btn btn-primary mb-2">
                  Profile
                </Link>
                <Link to="/" className="btn btn-info mb-2">
                  Log Out
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Login & Join Buttons (visible only on larger screens) */}
        <div className="d-none d-lg-flex">
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="userMenuDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  User Menu
                </button>
                <ul className="dropdown-menu" aria-labelledby="userMenuDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}>
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary me-2 rounded-1">
                Profile
              </Link>
              <Link to="/" className="btn btn-info mb-2">
                Log Out
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default ProfileNavbar;