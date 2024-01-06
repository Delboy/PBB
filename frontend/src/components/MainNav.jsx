import React from "react";
import { useState } from "react";

import { MdOutlineMenu } from "react-icons/md";

import useWindowResize from "../Hooks/UseWindowResize";

import List from "./List";
import SideNav from "./SideNav";
import Backdrop from "./Backdrop";

import classes from "./MainNav.module.css";

function MainNav() {
  const size = useWindowResize();

  const [sideNavOpen, setSideNavOpen] = useState(false);

  const hamburgerHandler = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const listItems = [
    {
        title: "Home",
        linkTo: '#'
    },
    {
        title: "Shop",
        linkTo: '#'
    },
    {
        title: "About",
        linkTo: '#'
    },
    {
        title: "Contact",
        linkTo: '#'
    },
  ]

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
          {sideNavOpen && <><Backdrop onClick={hamburgerHandler} /><SideNav onClick={hamburgerHandler} listItems={listItems} /></>}
        </>
      )}
    </nav>
  );
}

export default MainNav;
