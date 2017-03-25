import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav id="main-navbar">
          <ul>
            <li><Link to="/componentone">Component One</Link></li>
            <li><Link to="/componenttwo">SingleView</Link></li>
            <li><Link to="/process">Component Three</Link></li>
            <li><Link to="/portfolio">Component Four</Link></li>
          </ul>

  </nav>
);

export default Navbar;



