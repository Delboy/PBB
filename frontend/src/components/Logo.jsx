import React from "react";

import classes from './Logo.module.css'

export const Logo = () => {
  return (
    <div
      className={classes.logo}
    //   style={{ display: size.width < 1200 ? "none" : null }}
    >
      <div className={classes.logo__main}>PBB</div>
      <div className={classes.logo__sub}>plant based boutique</div>
    </div>
  );
};
