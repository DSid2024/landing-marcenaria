// src/components/Header.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header className="bg-dark text-white py-3 col-12">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">
            Marcenaria Acioli
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#sobre" className="nav-link">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a href="#galeria" className="nav-link">
                  Galeria
                </a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
