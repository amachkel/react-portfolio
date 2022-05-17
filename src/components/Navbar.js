import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
