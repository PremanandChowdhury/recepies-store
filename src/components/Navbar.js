import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      {/* logo start */}
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
      </Link>
      {/* logo end */}

      <div className="collapse navbar-collapse show ml-5">
        <ul className="navbar-nav">
          {/* navbar items start */}
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="navbar-item">
            <Link className="nav-link" to="/recipes">
              Recipes
            </Link>
          </li>

          {/* navbar items end */}
        </ul>
      </div>
    </nav>
  );
}
