import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import classes from "./ContactTable.module.css";

const ContactTable = () => {
  return (
    <table className={classes.table}>
      <tr>
        <th>Address:</th>
        <td>123 Plant Based Street</td>
      </tr>
      <tr>
        <th></th>
        <td>London</td>
      </tr>
      <tr>
        <th></th>
        <td>NW1 1RL</td>
      </tr>
      <tr>
        <th>Phone:</th>
        <td>+44 123 4567</td>
      </tr>
      <tr>
        <th>Email:</th>
        <td>email@email.com</td>
      </tr>
      <tr>
        <th>Social:</th>
        <td className={classes.icons}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to twitter"
          >
            <FaXTwitter />
          </a>
        </td>
      </tr>
    </table>
  );
};

export default ContactTable;
