import React from "react";
import classes from "./Hero.module.css";
import Pagination from "./Pagination";
import Slogans from "./Slogans";
import Top from "./Top";

function Hero() {
  return (
    <>
      <div className={classes.bg}></div>
      <div className={classes.container}>
        <Top />
        <Slogans/>
        <Pagination/>
      </div>
    </>
  );
}

export default Hero;
