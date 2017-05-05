import React from 'react';
import { Link } from 'react-router';
import logo from './superhero-logo.svg';

const NavBar = () =>
  <div className="">
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <ul>
        <Link className ="active" activeClassName="active-link" to="/home"> Home </Link>
        <Link className ="active" activeClassName="active-link" to="/heroes"> Heroes </Link>
        <Link className ="active" activeClassName="active-link" to="/villains"> Villains </Link>
        <Link className ="active" activeClassName="active-link" to="/post"> Post </Link>
      </ul>
    </nav>
  </div>

export default NavBar
