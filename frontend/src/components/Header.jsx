import { React, useState, useEffect} from "react";

import { IoBagOutline } from "react-icons/io5";
import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";

import useWindowResize from "../Hooks/UseWindowResize";

import MainNav from "./MainNav";
import Logo  from "./Logo";
import List from "./List";


import classes from "./Header.module.css";

const Header = () => {
  const size = useWindowResize();

  const [solidBg, setSolidBg] = useState(false);
  
  const changeBg = () => {
    if(window.scrollY <= 1 ){
      setSolidBg(false)
    } else { setSolidBg(true)}
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  });


  const mouseOverHandler = () => {
    if(!solidBg){
      setSolidBg(true)
    }
  }

  const mouseLeaveHandler = () => {
    if(window.scrollY === 0)
    {
      setSolidBg(false)
    }
  }

  const listItems = [
    {
        title: <FaRegUser />,
        linkTo: '#'
    },
    {
        title: <FaMagnifyingGlass />,
        linkTo: '#'
    },
    {
        title: <IoBagOutline />,
        linkTo: '#'
    },
  ]

  return (
    <header className={solidBg ? classes.solidBg : null} onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler}>
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
