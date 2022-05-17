import React from "react";
import "../styles/Header.css";
import "../images/avatar.jpg";

export default function Header() {
  return (
    <div className="header">
      <h1>Welcome to Alex's Portfolio</h1>
      <img src="../images/avatar.jpg" alt="avatar of Alex" />
    </div>
  );
}
