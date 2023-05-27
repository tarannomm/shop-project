import React from "react";
import { Link } from "react-router-dom";
import { shorten } from "../../helper/functions";
import styles from "../../styles/css/card.module.css";
import ShopButtons from "./ShopButtons";
const Card = (props) => {
  const { image, title, price, id } = props.productData;
  return (
    <div className={styles.productContainer}>
      <img src={image} alt="product" />
      <h3>{shorten(title)}</h3>
      <span>{price} $</span>
      <div className={styles.bottomContainer}>
        <Link to={`products/${id}`}>Details</Link>
        <ShopButtons  productData={props.productData}/>
      </div>
    </div>
  );
};

export default Card;
