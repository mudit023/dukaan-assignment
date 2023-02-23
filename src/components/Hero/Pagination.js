import React from 'react'
import classes from './Pagination.module.css';

function Pagination() {
  return (
    <div className={classes.container}>
      <div className={classes.prev}><a href='#'>Prev</a></div>
      <ul className={classes.pages}>
        <li id={classes.current}><a href='#'>1</a></li>
        <li><a href='#'>2</a></li>
        <li><a href='#'>3</a></li>
        <li><a href='#'>...</a></li>
        <li><a href='#'>21</a></li>
      </ul>
      <div className={classes.next}><a href='#'>Next</a></div>
    </div>
  )
}

export default Pagination