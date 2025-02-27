import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import logo from '../acm.png';

function Footer() {
    return (
        <footer className="footer bg-dark text-white">
          <div className="container-fluid p-0">
            {/* Top Row - Association for Computing Machinery */}
            <div className="row g-0">
              <div className="col-12">
                <a
                  className="nav-link py-3 navbar-title"
                  href="/"
                  role="link"
                >
                  Association for Computing Machinery
                </a>
              </div>
            </div>
            
            {/* Bottom Row - Navigation Links */}
            <div className="row g-0">
              <div className="col d-flex flex-row align-items-center">
                <a
                  className="nav-link py-2 me-3"
                  href="/about"
                  role="link"
                  style={{ paddingLeft: '15px' }}
                >
                  About
                </a>
                <a
                  className="nav-link py-2 me-3"
                  href="/publications"
                  role="link"
                >
                  Publications
                </a>
                <a
                  className="nav-link py-2 me-3"
                  href="/community"
                  role="link"
                >
                  Community
                </a>
                <a
                  className="nav-link py-2 me-3"
                  href="/education"
                  role="link"
                >
                  Education
                </a>
                <a
                  className="nav-link py-2"
                  href="/contact"
                  role="link"
                >
                  Connect with Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer;