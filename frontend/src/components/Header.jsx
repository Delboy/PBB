import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";

import BagIcon from "./BagIcon";
import useWindowResize from "../Hooks/UseWindowResize";

import MainNav from "./MainNav";
import Logo from "./Logo";
import List from "./List";

import classes from "./Header.module.css";

const Header = () => {
  const size = useWindowResize();
  const location = useLocation();

  const [solidBg, setSolidBg] = useState(true);
  const [onHome, setOnHome] = useState();

  const changeBg = () => {
    if (onHome && window.scrollY <= 1) {
      setSolidBg(false);
    } else {
      setSolidBg(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  });

  useEffect(() => {
    if (location.pathname === "/") {
      setOnHome(true)
      setSolidBg(false)
      ;
    } else {
      setOnHome(false)
      setSolidBg(true);
    }
  }, [location]);

  const mouseOverHandler = () => {
    if (onHome && !solidBg) {
      setSolidBg(true);
    }
  };

  const mouseLeaveHandler = () => {
    if (onHome && window.scrollY === 0) {
      setSolidBg(false);
    }
  };

  const listItems = [
    {
      title: <FaRegUser />,
      linkTo: "/profile",
    },
    {
      title: <FaMagnifyingGlass />,
      linkTo: "#",
    },
    {
      title: <BagIcon />,
      linkTo: "#",
    },
  ];

  return (
    <header
      className={solidBg ? classes.solidBg : null}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
    >
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
        <List listItems={listItems} />
      </div>
    </header>
  );
};

export default Header;
