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
    <div className={classes.sideNav}>
      <div className={classes.main}>
        <button className={classes.exit} onClick={props.onClick}>
          X
        </button>
        <nav className={classes.mainNav}>
          <List listItems={props.listItems} divider />
        </nav>
        <nav className={classes.subNav}>
          <List listItems={subList} small />
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
