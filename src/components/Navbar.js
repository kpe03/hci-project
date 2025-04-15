import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext"; 
import { Link } from "react-router-dom";
import "./BookmarkButton"
import "./Navbar.css";
import logo from "../assets/images/acm-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import BookmarkButton from "./BookmarkButton";

function Navbar({onBookmarkClick}) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const aboutItems = [
    {label: "About ACM", link: "/about/acm"},
    {label: "ACM Constitution", link: "/about/constitution"},
    {label: "ACM Council", link: "/about/council"},
    {label: "ACM in the News", link: "/about/news"},
    {label: "ACM Updates", link: "/about/updates"},
    {label: "ACM Statements", link: "/about/statements"},
    {label: "ACM's Mission, Vision & Values", link: "/about/vision"},
    {label: "Annual Reports", link: "/about/reports"},
    {label: "Boards & Committees", link: "/about/committees"}, 
    {label: "Bylaws", link: "/about/bylaws"},
    {label: "Code of Ethics", link: "/about/ethics"},
    {label: "Ethics Enforcement", link: "/about/enforcement"},
    {label: "Contact Us", link: "/about/contact"},
    {label: "Governance", link: "/about/governance"},
    {label: "History", link: "/about/history"},
    {label: "Media Center", link: "/about/media"},
    {label: "Past Presidents", link: "/about/presidents"},
    {label: "Complaint Process", link: "/about/complaints"},
    {label: "Report Behavior", link: "/about/report"},
    {label: "Stop Harassment", link: "/about/harassment"},
  ];
  /* To create all the links in the dropdown of the Navbar */
  const publicationItems = [
    {label: "Digital Library", link: "/publications/digital-library"},
    {label: "CACM", link: "/publications/cacm"},
    {label: "Journals", link: "/publications/journals"},
    {label: "Books", link: "/publications/books"},
    {label: "ACM Conference Proceedings", link: "/publications/acm-conference-proceedings"},
    {label: "Policies", link: "/publications/policies"},
    {label: "Report a Potential Violation", link: "/publications/potential-violation"},
    {label: "Ethics & Plagiarism", link: "/publications/ethics-and-plagiarism"},
    {label: "Publications Board", link: "/publications/Publications-Board"},
  ];

  const chapterItems = [{label: "About Chapters", link: "/chapters/about-chapters"},
    {label: "Professional Chapters", link: "/chapters/professional-chapters"},
    {label: "Student Chapters", link: "/chapters/student-chapters"},
    {label: "Meetups", link: "/chapters/meetups"},
    {label: "Newsletter", link: "/chapters/newsletter"},
    {label: "Calendar of Local Activities", link: "/chapters/calendar-local-activities"},
    {label: "Distinguished Speakers", link: "/chapters/distinguished-speakers"},
    {label: "Annual Reports", link: "/chapters/annual-reports"},
    {label: "Chapter Policies", link: "/chapters/chapter-policies"},
    {label: "Chapter Administrative Interface", link: "/chapters/administrative-interface"},
  ];

  
  const confItems = [{label: "About Conferences", link: "/conferences/about-conferences"},
    {label: "Conference Series", link: "/conferences/conferences-series"},
    {label: "Upcoming Conferences", link: "/conferences/upcoming-conferences"},
    {label: "Conference Proceedings", link: "/conferences/conference-proceedings"},
    {label: "Submission Deadlines", link: "/conferences/submission-deadlines"},
    {label: "ACM Author Rights and Permissions", link: "/conferences/author-rights-and-permissions"},
    {label: "Best Paper Awards", link: "/conferences/best-paper-awards"},
    {label: "Volunteer Resources", link: "/conferences/volunteer-resources"},
    {label: "Ethics & Plagiarism", link: "/conferences/ethics-and-plagiarism"},
    {label: "Publications Board", link: "/conferences/Publications-Board"},
  ];

  
  const edItems = [{label: "About Education", link: "/education/about-edcuation"},
    {label: "Curricula Recommendations", link: "/education/curricula-recommendations"},
    {label: "Affiliated Organizations", link: "/education/affiliated-organizations"},
    {label: "ACM Learning Center", link: "/education/acm-learning-center"},
    {label: "Resources for Educators", link: "/education/resources-for-educators"},
    {label: "Resources for Graduating Students", link: "/education/resources-for-graduating-students"},
    {label: "Education Board and Advisory Committee", link: "/education/education-board-and-advisory-committee"},
    {label: "Reports and Studies", link: "/education/reports-and-studies"}
  ];

  const moreItems = [
    {label: "Awards", link: "/awards/about"},
    {label: "Diversity, Equity, and Inclusion", link: "/dei/about"},
    {label: "Membership", link: "/membership/about"},
    {label: "Special Interest Groups", link: "/sig/about"},
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
      <Link to={linkRoute}>
        <div clasName="dropdown-item dropdown-link">
        {linkName}
        </div>
        
      </Link>
      

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
         
            {makeDropdown("About", aboutItems)}
            {makeDropdown("Publications", publicationItems)}
            {makeDropdown("Chapters", chapterItems)}
            {makeDropdown("Conferences", confItems)}
            {makeDropdown("Education", edItems)}
            {makeDropdown("More", moreItems)}
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
                <Link className="btn btn-outline-light mb-2" to="/bookmarks">
                  Bookmarks
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="d-flex flex-column w-100">
                <Link to="/login" className="btn btn-outline-light mb-2">
                  Login
                </Link>
                <a className="btn btn-outline-info" href="/join">
                  Join
                </a>
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
                    <Link className="dropdown-item" to="/bookmarks">
                      My Bookmarks
                    </Link>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>

              <BookmarkButton onClick={onBookmarkClick}/>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light me-2 rounded-1">
                Login
              </Link>
              <Link to="/join" className="btn btn-outline-light rounded-1">
                Join
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;