import React from "react";

import classes from './Logo.module.css'

const Logo = () => {
  return (
    <div
      className={classes.logo}
    >
      <div className={classes.logo__main}>PBB</div>
      <div className={classes.logo__sub}>plant based boutique</div>
    </div>
  );
};

export default Logo;