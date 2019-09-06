import React from 'react';
import '../App.css';
import logo from '../img/logo.svg';
import {Link} from 'react-router-dom';

function nav() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/folio">
          <li>Folio</li>
        </Link>
      </ul>
    </nav>
  );
}

export default nav;
