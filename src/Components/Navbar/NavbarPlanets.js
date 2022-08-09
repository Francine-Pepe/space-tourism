import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";


const NavbarPlanets = () => {
  const navLinks = [
    {
      name: "Moon",
      link: "/destination/moon",
    },
    {
      name: "Mars",
      link: "/destination/mars",
    },
    {
      name: "Europa",
      link: "/destination/europa",
    },
    {
      name: "Titan",
      link: "/destination/titan",
    },
  ];

 
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <nav className={styles.nav_container}>
        <ul className={styles.nav_link_planets}>
          {navLinks.map((navLinks, index) => (
            <li
              className={styles.list_container_planets}
              key={index}
              style={{
                borderBottomColor: isActive ? "white" : "",
              }}
              onClick={handleClick}
            >
              <NavLink to={navLinks.link} className={styles.active}>
                {navLinks.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavbarPlanets;
