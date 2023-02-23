import React from 'react'
import classes from './Slogan.module.css';
function Slogan(props) {
  return (
    <div className={classes.container}>
      <p>{props.data}</p>
    </div>
  )
}

export default Slogan