import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HelpCircle } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import HelpModal from './HelpModal';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/topics', label: 'Topics' },
  { path: '/about', label: 'About' },
  { path: '/donate', label: 'Donate' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            Technical Quiz
          </Link>

          <nav className={`navbar-nav ${menuOpen ? 'navbar-nav-open' : ''}`}>
            <ul className="navbar-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`navbar-link ${isActive(link.path) ? 'navbar-link-active' : ''}`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className="navbar-link navbar-help-link"
                  onClick={() => { setHelpOpen(true); closeMenu(); }}
                >
                  <HelpCircle className="navbar-help-icon" />
                  Help
                </button>
              </li>
            </ul>
            <div className="navbar-mobile-theme">
              <ThemeToggle />
            </div>
          </nav>

          <div className="navbar-actions">

            <ThemeToggle />
            <button
              className="navbar-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <HelpModal isOpen={helpOpen} onClose={() => setHelpOpen(false)} />
    </>
  );
}

export default Navbar;