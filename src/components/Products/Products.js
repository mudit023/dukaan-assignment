import React from "react";
import ProductCard from "./ProductCard";
import classes from "./Products.module.css";
import img1 from '../../assets/Rectangle 124.png'
import img2 from '../../assets/Rectangle 125.png'
import img3 from '../../assets/Rectangle 126.png'
import img4 from '../../assets/Rectangle 127.png'

const DUMMY_PRODUCTS = [
  {
    img: `${img1}`,
    title: "Privacy Policy Generator",
    des: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    img: `${img2}`,
    title: "Terms & Conditions Generator",
    des: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    img: `${img3}`,
    title: "Domain Name Generator",
    des: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
  {
    img: `${img4}`,
    title: "Invoice Generator",
    des: "Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.",
  },
];

function Products() {
  return (
    <div className={classes.container}>
      <h2>Try our other free products</h2>
      <div className={classes.products}>
        {DUMMY_PRODUCTS.map((obj)=><ProductCard img={obj.img} title={obj.title} des={obj.des} key={Math.random()*9}/>)}
      </div>
    </div>
  );
}

export default Products;
