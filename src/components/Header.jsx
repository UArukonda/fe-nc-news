import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <nav>
        <ul id="nav-bar">
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/articles">
            <li className="nav-item">Articles</li>
          </Link>
          <Link to="/users">
            <li className="nav-item">Users</li>
          </Link>
          <Link to="/topics">
            <li className="nav-item">topics</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
