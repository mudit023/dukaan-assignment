import React from 'react'
import classes from './ProductCard.module.css';
function ProductCard(props) {
  return (
    <div className={classes.container}>
      <img src={props.img}/>
      <h3>{props.title}</h3>
      <p>{props.des}</p>
    </div>
  )
}

export default ProductCard