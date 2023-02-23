import React from 'react'
import Slogan from './Slogan';
import classes from './Slogans.module.css'

const DUMMY_DATA = [
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "coziness building for tomorrow",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Review the facts cool is the best.",
  "Review the facts cool is the best.",
  "coziness building for tomorrow",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "coziness building for tomorrow",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "coziness building for tomorrow",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "coziness building for tomorrow",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "coziness building for tomorrow",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "coziness building for tomorrow",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "coziness building for tomorrow",
];

function Slogans() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>We have generated 1,023 slogans for “cozy”</h3>
        <button type='button'>Download all</button>
      </div>
      <div className={classes.slogans}>
        {DUMMY_DATA.map((data)=><Slogan data={data} key={Math.random()*9}/>)}
      </div>
      <div className={classes.divider}></div>
    </div>
  )
}

export default Slogans