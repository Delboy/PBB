import React from "react";

import Logo from "./Logo";
import List from "./List";
import ContactTable from "./ContactTable";
import NewsLetter from "./NewsLetter";

import classes from "./Footer.module.css";

const Footer = () => {
  const quickLinks = [
    {
      title: "Home",
      linkTo: "/",
    },
    {
      title: "Shop",
      linkTo: "/shop",
    },
    {
      title: "About",
      linkTo: "/about",
    },
    {
      title: "Account",
      linkTo: "/account",
    },
  ];

  return (
    <footer className={classes.main}>
    <div className={classes.row}>
      <div className={classes.column}>
        <Logo footer />
        <div className={classes.tag}>
          <p>
            Not so long ago we embarked on a journey with you to offer
            animal-friendly lifestyle products to the world. Over 30,000
            individuals worldwide now walk the Earth in our cruelty-free shoes
            daily.
          </p>
          <p>Copyrights - {new Date().getFullYear()} PPB</p>
        </div>
      </div>
      <div className={classes.column}>
        <h3>Quick Links</h3>
        <List listItems={quickLinks} small />
      </div>
    </div>
    <div className={classes.row}>
      <div className={classes.column}>
        <h3>Contact Us</h3>
        <ContactTable />
      </div>
      <div className={classes.column}>
        <h3>Newsletter</h3>
        <NewsLetter />
      </div>
    </div>
    </footer>
  );
};

export default Footer;
