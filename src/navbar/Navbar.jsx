import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link from react-router-dom
import '../navbar/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg position-fixed top-0 start-0 end-0 z-3">
            <div className="container position-relative">
                <NavLink className="navbar-brand" to="/home">
                    START FRAMEWORK
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse position-absolute end-0" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/about">
                                ABOUT
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/portfolio">
                                PORTFOLIO
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
