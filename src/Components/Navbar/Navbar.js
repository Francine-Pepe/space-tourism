import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >Destination</NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >Crew</NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >Technology</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
