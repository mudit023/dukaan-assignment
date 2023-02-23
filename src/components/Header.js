import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/logo/white.svg";
function Header() {
  return (
    <>
      <div className={classes.header}></div>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt="Dukaan Logo" />
        </div>
        <div className={classes.btn}>
          <a href="#">Sign In</a>
          <button type="button">Dukaan for PC</button>
        </div>
      </div>
    </>
  );
}

export default Header;
