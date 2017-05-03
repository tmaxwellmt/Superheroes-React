import React from 'react';
import { Link } from 'react-router';

const NavBar = () =>
  <div className="">
    <nav>
      <ul className="nav-flex">
        <Link activeClassName="active-link" to="/home"> Home </Link>
        <Link activeClassName="active-link" to="/heroes"> Heroes </Link>
        <Link activeClassName="active-link" to="/villains"> Villains </Link>
        <Link activeClassName="active-link" to="/post"> Post </Link>
      </ul>
    </nav>
  </div>

export default NavBar
