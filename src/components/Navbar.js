import React from 'react';
import './Navbar.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className="container-fluid">
                {/* Left Side - Logo and Title */}
                <div className="d-flex align-items-center">
                    <img src="acm_logo.png" className="me-2" style={{ height: "40px" }} alt="ACM logo" />
                    <a className="navbar-brand" href="/" style={{ fontSize: "15px" }}>
                        Association for Computing Machinery
                    </a>
                </div>

                {/* Center - Navigation Links */}
                <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav">
                        {/* About Dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                About
                            </a>
                            <div className="dropdown-menu dropdown-container">
                                <div className="container">
                                <div className="row">
                                    <div className="col dropdown-col-container">
                                        <a className="dropdown-item dropdown-link" href="/about/acm">About ACM</a>
                                        <a className="dropdown-item dropdown-link" href="/about/constitution">ACM Constitution</a>
                                        <a className="dropdown-item dropdown-link" href="/about/council">ACM Council</a>
                                        <a className="dropdown-item dropdown-link" href="/about/news">ACM in the News</a>
                                        <a className="dropdown-item dropdown-link" href="/about/updates">ACM Updates</a>
                                    </div>
                                    <div className="col dropdown-col-container">
                                        <a className="dropdown-item dropdown-link" href="/about/statements">ACM Statements</a>
                                        <a className="dropdown-item dropdown-link" href="/about/vision">ACM’s Mission, Vision & Values</a>
                                        <a className="dropdown-item dropdown-link" href="/about/reports">Annual Reports</a>
                                        <a className="dropdown-item dropdown-link" href="/about/committees">Boards & Committees</a>
                                        <a className="dropdown-item dropdown-link" href="/about/bylaws">Bylaws</a>
                                    </div>
                                    <div className="col dropdown-col-container">
                                        <a className="dropdown-item dropdown-link" href="/about/ethics">Code of Ethics</a>
                                        <a className="dropdown-item dropdown-link" href="/about/enforcement">Ethics Enforcement</a>
                                        <a className="dropdown-item dropdown-link" href="/about/contact">Contact Us</a>
                                        <a className="dropdown-item dropdown-link" href="/about/governance">Governance</a>
                                        <a className="dropdown-item dropdown-link" href="/about/history">History</a>
                                    </div>
                                    <div className="col dropdown-col-container">
                                        <a className="dropdown-item dropdown-link" href="/about/media">Media Center</a>
                                        <a className="dropdown-item dropdown-link" href="/about/presidents">Past Presidents</a>
                                        <a className="dropdown-item dropdown-link" href="/about/complaints">Complaint Process</a>
                                        <a className="dropdown-item dropdown-link" href="/about/report">Report Behavior</a>
                                        <a className="dropdown-item dropdown-link" href="/about/harassment">Stop Harassment</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </li>

                        {/* Other Sections */}
                        {["Publications", "Chapters", "Conferences", "Education", "More"].map((section) => (
                            <li key={section} className="nav-item dropdown navbar-content">
                                <a className="nav-link dropdown-toggle" href={`/${section.toLowerCase()}`} role="button" data-bs-toggle="dropdown">
                                    {section}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item dropdown-link" href={`/${section.toLowerCase()}/option1`}>Option 1</a></li>
                                    <li><a className="dropdown-item dropdown-link" href={`/${section.toLowerCase()}/option2`}>Option 2</a></li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side - Login & Join Buttons */}
                <div className="d-flex">
                    <a className="btn btn-primary me-2" href="/login">Login</a>
                    <a className="btn btn-info" href="/join">Join</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;