import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href="#">Skweezit</a>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
      </ul>
    </div>
  </nav>
     );
}
 
export default Navbar;