import React from "react";
import { shorten } from "../../helper/functions";
import ShopButtons from "../shared/ShopButtons";
import styles from "../../styles/css/shCart.module.css";
const ShCard = (props) => {
    const {image,title,price,quantity}=props.product;
  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <span>{quantity}</span>

      <ShopButtons  productData={props.product}/>
      
    </div>
  );
};

export default ShCard;
