import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎬 Movie Explorer</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </nav>
  );
}

export default Navbar;