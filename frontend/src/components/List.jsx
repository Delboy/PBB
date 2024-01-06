import React from "react";

import classes from "./List.module.css";

function List(props) {
  return (
    <ul className={classes.list} style={{gap: props.small ? ".5rem" : "2.5rem"}}>
      {props.listItems.map((listItem, index) => (
        <li
          key={index}
          className={`${props.divider ? classes.divider : null} ${
            props.small ? classes.small : null
          }`}
        >
          {listItem.title}
        </li>
      ))}
    </ul>
  );
}

export default List;
