import React from 'react';
import '../App.css';
import logo from '../img/logo.svg';
import Logo from '../img/logo.jsx';
import {Link} from 'react-router-dom';

function nav() {
  return (
    <nav>
      <div className="container">
        <div className="container-grid">
          <Link to="/">
            <Logo color="#a87952" size = {80}/>
          </Link>
          <ul className="nav-links">
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/folio">
              <li>Folio</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default nav;
