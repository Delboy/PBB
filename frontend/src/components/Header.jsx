import React from "react";

import { IoBagOutline } from "react-icons/io5";
import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";

import useWindowResize from "../Hooks/UseWindowResize";

import MainNav from "./MainNav";

import { Logo } from "./Logo";

import classes from "./Header.module.css";

const Header = () => {
  const size = useWindowResize();

  return (
    <header>
      <div className={classes.leftSection}>
        <div style={{ display: size.width < 1200 ? "none" : null }}>
          <Logo />
        </div>
        <div style={{ order: size.width > 1200 ? 2 : 1 }}>
          <MainNav />
        </div>
      </div>
      <div style={{ display: size.width > 1200 ? "none" : null }}>
        <Logo />
      </div>

      <div className={`${classes.nav} ${classes.icons}`}>
        <ul>
          <li>
            <FaRegUser />
          </li>
          <li>
            <FaMagnifyingGlass />
          </li>
          <li>
            <IoBagOutline />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
