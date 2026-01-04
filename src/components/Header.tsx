import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          Razdaan
        </Link>
        <p className="tagline">Reflections on life, meaning, and the human condition</p>
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Essays
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
