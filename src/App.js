import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Toggle from 'react-toggle';
import './App.css';
import 'react-toggle/style.css';
import logo from './img/TamDeDBEPI.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <header className="App-header">
          <div className="container">
            <div className="header-wrapper">
              <Link to="/" onClick={closeMenu}>
                <img className="logo" src={logo} alt="TamDeDBEPI" />
              </Link>
              <div
                className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul className="menu">
                  <li>
                    <Link to="/" onClick={closeMenu}>
                      Головна
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeMenu}>
                      Про нас
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalog" onClick={closeMenu}>
                      Каталог
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeMenu}>
                      Контакти
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/TamdeDveri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/TamdeDveri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <Toggle
                  className="dark-mode-toggle"
                  checked={darkMode}
                  icons={{
                    checked: <span className="toggle-icon">🌙</span>,
                    unchecked: <span className="toggle-icon">☀️</span>,
                  }}
                  onChange={toggleDarkMode}
                />
              </div>
            </div>
          </div>
        </header>

        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <footer>
          <div className="container">
            <Footer />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
