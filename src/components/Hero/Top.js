import React from "react";
import cross from "../../assets/cross.png";
import classes from "./Top.module.css";

function Top() {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>Free slogan maker</h1>
        <p>
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>
      </div>
      <div className={classes.slogan}>
        <label htmlFor="inp">Word for your slogan</label>
        <div className={classes.input}>
            <input type="text" placeholder="cozy" id="inp" />
            <img src={cross} alt="cross" />
        </div>
      </div>
      <div className={classes.btn}>
        <button type="button">Generate Slogans</button>
      </div>
      <div className={classes.divider}></div>
    </div>
  );
}

export default Top;
