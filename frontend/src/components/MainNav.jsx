import React from "react";
import { useState } from "react";

import { MdOutlineMenu } from "react-icons/md";

import useWindowResize from "../Hooks/UseWindowResize";

import List from "./List";
import SideDrawer from "./SideDrawer";
import SideNav from "./SideNav";

import classes from "./MainNav.module.css";

const MainNav = () => {
  const size = useWindowResize();

  const [sideNavOpen, setSideNavOpen] = useState(false);

  const hamburgerHandler = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const listItems = [
    {
      title: "Home",
      linkTo: "/",
    },
    {
      title: "Shop",
      linkTo: "/shop",
    },
    {
      title: "About",
      linkTo: "/about",
    },
    {
      title: "Contact",
      linkTo: "/contact",
    },
  ];

  return (
    <nav className={classes.nav}>
      {size.width > 1200 ? (
        <List listItems={listItems} />
      ) : (
        <>
          <MdOutlineMenu
            className={classes.hamburger}
            onClick={hamburgerHandler}
          />
          <SideDrawer openStatus={sideNavOpen} closeHandler={hamburgerHandler} >
            <SideNav listItems={listItems} />
          </SideDrawer>
        </>
      )}
    </nav>
  );
}

export default MainNav;
