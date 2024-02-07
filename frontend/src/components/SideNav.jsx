import React from "react";
import List from "./List";

import classes from "./SideNav.module.css";

const SideNav = (props) => {
  const subList = [
    {
      title: "Contact Us",
      linkTo: "#",
    },
    {
      title: "Account",
      linkTo: "#",
    },
  ];

  return (
    <>
      <nav className={classes.mainNav}>
        <List listItems={props.listItems} divider onClick={props.onClick} />
      </nav>
      <nav className={classes.subNav}>
        <List listItems={subList} small onClick={props.onClick} />
      </nav>
    </>
  );
};

export default SideNav;
