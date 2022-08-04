import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../Images/shared/logo.svg";
// import icon_hamburger from "../../Images/shared/icon-hamburger.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const navLinks = [
    {
      number: "00",
      name: "Home",
      link: "/home",
    },
    {
      number: "01",
      name: "Destination",
      link: "/destination",
    },
    {
      number: "02",
      name: "Crew",
      link: "/crew",
    },
    {
      number: "03",
      name: "Technology",
      link: "/technology",
    },
  ];

  return (
    <>
      <nav className={styles.nav_container}>
        <NavLink to="/home">
          <img src={Logo} alt="space_logo" />
        </NavLink>
        <label htmlFor="toggler">
          <Dropdown />
        </label>

        <hr />
        <ul className={styles.nav_link}>
          {navLinks.map((navLinks) => (
            <li className={styles.list_container}>
              <NavLink to={navLinks.link} className={styles.active}>
                <span>{navLinks.number}</span> {navLinks.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
