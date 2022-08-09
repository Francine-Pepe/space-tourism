import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dropdown.module.css";
import open_menu from "../../Images/shared/icon-hamburger.svg";
import close_menu from "../../Images/shared/icon-close.svg";

export default function Dropdown() {
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <div className={styles.dropdown_menu}>
        <Button
          mr="2.5rem"
          colorScheme="transparent"
          onClick={onOpen}
          className={styles.open_button}
          // style={{ display: isOpen ? "block" : "none" }}
        >
          <img src={open_menu} alt="" />
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent
            bgColor={"rgba(255, 255, 255, 0.05)"}
            backdropFilter="auto"
            backdropBlur="20px"
          >
            <DrawerBody>
              <Button
                marginTop={3}
                colorScheme="transparent"
                paddingLeft="15rem"
                onClick={onClose}
                className={styles.close_button}
              >
                <img src={close_menu} alt="" />
              </Button>

              <nav className={styles.nav_container}>
                <ul className={styles.nav_link_mobile}>
                  {navLinks.map((navLinks, index) => (
                    <li className={styles.list_container} key={index}>
                      <NavLink to={navLinks.link} className={styles.active}>
                        <span>{navLinks.number}</span> {navLinks.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
