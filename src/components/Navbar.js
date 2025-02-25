import React from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="navbar-nav d-flex flex-row align-items-center">
                <div class="d-flex justify-content-start w-50">
                    <a class="nav-link" href="/" role="button">Association for Computing Machinery</a>
                </div>
                <div className="navbar-nav d-flex flex-row m-3">
                    <a className="nav-link m-1" href="/about" role="button">About</a>
                    <a className="nav-link m-1" href="/contact" role="button">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;