import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
// import logo from './acm.png';

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="top container-fluid p-0">
        {/* Top Row - Association for Computing Machinery */}
        <div className="row g-0">
          <div className="col-12">
            <a
              className="nav-link py-3 footer-title"
              href="/"
              role="link"
            >
              Association for Computing Machinery
            </a>
          </div>
        </div>
        {/* END Top Row */}

        {/* Bottom Row - Navigation Links */}
        <div className="row g-0">
          <div className="col">
            {/* Main navigation row */}
            <div className="d-flex flex-row align-items-start">
              {/* About section with its submenu */}
              <div className="nav-item about-container me-3">
                <a
                  className="nav-link py-2 main-nav-link"
                  href="/about"
                  role="link"
                >
                  About
                </a>

                {/* About submenu (structurally connected to its parent) */}
                <div className="about-submenu">
                  <a
                    className="nav-link py-1 about-submenu-item"
                    href="/"
                    role="link"
                  >
                    About ACM
                  </a>
                  <a
                    className="nav-link py-1 about-submenu-item"
                    href="/"
                    role="link"
                  >
                    Membership
                  </a>
                  <a
                    className="nav-link py-1 about-submenu-item"
                    href="/"
                    role="link"
                  >
                    MyACM Sign In
                  </a>
                  <a
                    className="nav-link py-1 about-submenu-item"
                    href="/"
                    role="link"
                  >
                    Volunteer
                  </a>
                </div>
              </div>

              {/* Publications section */}
              <div className="footer-item publications-container me-3">
                <a
                  className="nav-link py-2 main-nav-link"
                  href="/publications"
                  role="link"
                >
                  Publications
                </a>
                <div className="publications-submenu">
                  <a
                    className="nav-link py-1 publications-submenu-item"
                    href="/"
                    role="link"
                  >
                    About Publications
                  </a>

                  <a
                    className="nav-link py-1 publications-submenu-item"
                    href="/"
                    role="link"
                  >
                    Digital Library
                  </a>

                  <a
                    className="nav-link py-1 publications-submenu-item"
                    href="/"
                    role="link"
                  >
                    Submit a Paper
                  </a>
                </div>
              </div>

              {/* Community section */}
              <div className="footer-item community-container main-nav-link">
                <a
                  className="nav-link py-2 me-3 align-self-start"
                  href="/community"
                  role="link"
                >
                  Community
                </a>

                <div className="community-submenu">
                  <a
                    className="nav-link py-1 community-submenu-item"
                    href="/"
                    role="link"
                  >
                    Special Interest Groups
                  </a>
                  <a
                    className="nav-link py-1 community-submenu-item"
                    href="/"
                    role="link"
                  >
                    Chapters
                  </a>

                </div>
              </div>
              {/* Education section */}
              <div className="footer-item education-container main-nav-link">
                <a
                  className="nav-link py-2 me-3 align-self-start"
                  href="/education"
                  role="link"
                >
                  Education
                </a>

                <div className="education-submenu">
                  <a
                    className="nav-link py-1 education-submenu-item"
                    href="/"
                    role="link"
                  >
                    Education Center
                  </a>
                </div>
              </div>
              <div className="footer-item community-container main-nav-link">
                <a
                  className="nav-link py-2 align-self-start main-nav-link"
                  href="/contact"
                  role="link"
                >
                  Connect with Us
                </a>

                {/* INSERT THE IMAGES HERE */}
                <div className="connect-submenu">
                  <div className="connect-row-1">
                    <img src="/carousel-images/X.png" alt="X Logo" className="social-icon" />
                    <img src="/carousel-images/instagram.png" alt="Instagram Logo" className="social-icon" />
                    <img src="/carousel-images/linkedin.png" alt="Linked Logo" className="social-icon" />
                    <img src="/carousel-images/youtube.png" alt="Youtube Logo" className="social-icon" />
                  </div>
                  <div className="connect-row-2">
                    <img src="/carousel-images/reddit.png" alt="Reddit Logo" className="social-icon" />
                    <img src="/carousel-images/mastodon.jpeg" alt="Mastodon Logo" className="social-icon" />
                    <img src="/carousel-images/flickr.png" alt="Flickr Logo" className="social-icon" />
                    <img src="/carousel-images/facebook.png" alt="Facebook Logo" className="social-icon" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* END Bottom Row*/}

      </div>
      {/* End Options */}
      <div className="bottom container-fluid p-0">
        <div className="row g-0">
          <div className="bottom-row d-flex flex-row align-items-start">
            <a
              className="underline nav-link py-3 contactus me-3"
              href="/"
              role="link"
            >
              Contact Us
            </a>
            <a
              className="underline nav-link py-3 privacypolicy me-3"
              href="/"
              role="link"
            >
              Privacy Policy
            </a>

            <a
              className="underline nav-link py-3 socialmediapolicy me-3"
              href="/"
              role="link"
            >
              Social Media Policy
            </a>

            <a
              className="nav-link py-3 copyright me-3"
              href="/"
              role="link"
            >
              Copyright &#169; 2025, ACM, Inc
            </a>

          </div>
          <div className="col-12">

          </div>
        </div>
      </div>
    </footer >

  );
}

export default Footer;