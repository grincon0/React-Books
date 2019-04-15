import React from "react";
import "./style.css";

 const NavBar = (props) =>  {
    return (
        <nav className={`new-nav-bar`}>
            <div className={`nav-logo`}>
                <h1>Bookster</h1>
            </div>
            <div className={`nav-list-parent`}>
                <ul className={`new-nav-list`}>
                    <li>
                        <a href="/search">Search</a>
                    </li>
                    <li>
                        <a href="/saved">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

