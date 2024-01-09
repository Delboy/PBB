import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./List.module.css";

function List(props) {
  return (
    <ul className={classes.list} style={{gap: props.small ? ".5rem" : "2.5rem"}}>
      {props.listItems.map((listItem, index) => (
        <NavLink to={listItem.linkTo} key={index}>
        <li
          className={`${props.divider ? classes.divider : null} ${
            props.small ? classes.small : null
          }`}
        >
          {listItem.title}
        </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default List;
