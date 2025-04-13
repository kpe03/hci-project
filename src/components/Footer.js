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
              className="py-3 footer-title nav-link "
              //href="/"
              //role="link"

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
                  className="main-nav-link py-2 "
                  //href="/about"
                  //role="link"
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
                  className="main-nav-link py-2 "
                  //href="/publications"
                  //role="link"
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
              <div className="footer-item community-container">
                <a
                  className="main-nav-link py-2 "
                  //href="/community"
                  //role="link"
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
              <div className="footer-item education-container">
                <a
                  className="main-nav-link py-2 "
                  //href="/education"
                  //role="link"
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
              <div className="footer-item community-container">
                <a
                  className="main-nav-link py-2 "
                  //href="/contact"
                  //role="link"
                >
                  Connect with Us
                </a>

                {/* INSERT THE IMAGES HERE */}
                <div className="connect-submenu">
  <div className="connect-row-1">
    <a href="https://twitter.com/TheOfficialACM" target="_blank" rel="noopener noreferrer">
      <img src="/footer-images/X.png" alt="X Logo" className="social-icon" />
    </a>
    <a href="https://www.instagram.com/theofficialacm/" target="_blank" rel="noopener noreferrer">
      <img src="/footer-images/instagram.png" alt="Instagram Logo" className="social-icon" />
    </a>
    <a href="https://www.linkedin.com/company/association-for-computing-machinery/" target="_blank" rel="noopener noreferrer">
      <img src="/footer-images/linkedin.png" alt="Linked Logo" className="social-icon" />
    </a>
    <a href="https://www.youtube.com/user/TheOfficialACM" target="_blank" rel="noopener noreferrer">
      <img src="/footer-images/youtube.png" alt="Youtube Logo" className="social-icon" />
    </a>
  </div>
  <div className="connect-row-2">
    <a href="https://www.reddit.com/r/ACM/" target="_blank" rel="noopener noreferrer">
      <img src="/footer-images/reddit.png" alt="Reddit Logo" className="social-icon" />
    </a>
    <a href="https://mastodon.acm.org/@ACM" target="_blank" rel="noopener noreferrer">
      <img src="/footer-images/mastodon.png" alt="Mastodon Logo" className="social-icon" />
    </a>
    <a href="https://www.flickr.com/photos/theofficialacm" target="_blank" rel="noopener noreferrer">
      <img src="/footer-images/flickr.png" alt="Flickr Logo" className="social-icon" />
    </a>
    <a href="https://www.facebook.com/AssociationForComputingMachinery/" target="_blank" rel="noopener noreferrer">
      <img src="/footer-images/facebook.png" alt="Facebook Logo" className="social-icon" />
    </a>
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