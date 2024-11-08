import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 id="logo">UA News</h1>
      </Link>
      <nav>
        <ul id="nav-bar">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/articles">Articles</Link>
          </li>
          <li className="nav-item">
            <Link to="/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
