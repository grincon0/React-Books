import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg nav-back">

            <ul className="navbar-nav full">
                <li className="nav-item">
                    <a href="/">Bookster</a>
                </li>
                <li className="nav-item">
                    <a href="/search">Search</a>
                </li>
                <li className="nav-item">
                    <a href="/saved">Saved</a>
                </li>
            </ul>

            
        </nav>

    );
}

export default NavBar;