import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

  return (
  <nav id="main-navbar">
          <ul>
            <li><Link to="/componentone">Component One</Link></li>
            <li><Link to="/singleview">SingleView</Link></li>

          </ul>

  </nav>
  );
};


export default Navbar;
