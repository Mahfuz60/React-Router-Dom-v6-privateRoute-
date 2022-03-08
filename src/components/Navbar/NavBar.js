import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar ">
        <ul>
          <li>
            <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" style={({ isActive }) => ({ color: isActive ? "red" : "" })}>
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
