import React from "react";
import classes from "./Footer.module.css";
import ind from "../assets/Group.png";
import logo from "../assets/logo/white.svg";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.logo}>
            <img src={logo} />
          </div>
          <div className={classes.links}>
            <ul className={classes.col}>
              <li>Contacts</li>
              <li>FAQ's</li>
            </ul>
            <ul className={classes.col}>
              <li>Tutorial</li>
              <li>Blog</li>
            </ul>
            <ul className={classes.col}>
              <li>Privacy</li>
              <li>Banned Items</li>
            </ul>
            <ul className={classes.col}>
              <li>About</li>
              <li id={classes.jobs}>
                Jobs<span> 3</span>
              </li>
            </ul>
            <ul className={classes.col}>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.copyright}>
          <p>Dukaan 2020, All rights reserved.</p>
          <p className={classes.madeIn}>
            Made in <img src={ind} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
