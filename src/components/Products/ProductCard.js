import React from 'react'
import classes from './ProductCard.module.css';
function ProductCard(props) {
  return (
    <div className={classes.container}>
      <img src={props.img} className={classes.productImg}/>
      <h3 className={classes.productHeading}>{props.title}</h3>
      <p className={classes.des}>{props.des}</p>
    </div>
  )
}

export default ProductCard