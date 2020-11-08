import React from 'react';
import { NavLink } from 'react-router-dom';

import "./NavLinks.css";

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>All users</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">my place</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">add place</NavLink>
      </li>
      <li>
        <NavLink to="/auth">auth</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
