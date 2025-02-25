import React from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="navbar-nav d-flex flex-row align-items-center">
                <div class="d-flex w-50">
                    <a class="nav-link m-3" href="/" role="button">Association for Computing Machinery</a>
                </div>
                <div className="navbar-nav d-flex flex-row justify-content-between">
                    <a className="nav-link m-2" href="/publications" role="button">Publications</a>
                    <a className="nav-link m-2" href="/chapter" role="button">Chapters</a>
                    <a className="nav-link m-2" href="/conferences" role="button">Conferences</a>
                    <a className="nav-link m-2" href="/education" role="button">Education</a>
                    <a className="nav-link m-2" href="/more" role="button">More</a>
                    <a className="nav-link m-2" href="/login" role="button">Login</a>
                    <a className="nav-link m-2" href="/join" role="button">Join</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;