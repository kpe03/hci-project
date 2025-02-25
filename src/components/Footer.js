import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../acm.png';

function Footer() {
    return (
        <nav className="footer">
            <h1 className="footer-title">Association For Computing Machinery</h1>
            <img src={logo} alt="ACM logo" height="30" />
            {/* <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul> */}
        </nav>
    );
}

export default Footer;