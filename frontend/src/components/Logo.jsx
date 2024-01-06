import React from "react";
import {NavLink} from 'react-router-dom'

import classes from './Logo.module.css'

const Logo = () => {
  return (
    <NavLink to={'/'}>
    <div
      className={classes.logo}
    >
      <div className={classes.logo__main}>PBB</div>
      <div className={classes.logo__sub}>plant based boutique</div>
    </div>
    </NavLink>
  );
};

export default Logo;