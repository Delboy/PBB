import React from "react";

import { MdOutlineMenu } from "react-icons/md";

import useWindowResize from "../Hooks/UseWindowResize";

import classes from "./MainNav.module.css";

function MainNav() {
  const size = useWindowResize();

  return (
    <nav className={classes.nav}>
      {size.width > 1200 ? (
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      ) : (
        <MdOutlineMenu className={classes.hamburger} />
      )}
    </nav>
  );
}

export default MainNav;
