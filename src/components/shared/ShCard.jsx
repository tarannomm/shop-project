import React from "react";
import { shorten } from "../../helper/functions";
import ShopButtons from "../shared/ShopButtons";
import styles from "../../styles/css/shCart.module.css";
const ShCard = ({product}) => {
    const {image,title,price,quantity}=product;
  return (
    <div className={styles.container}>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <span>{quantity}</span>

      <ShopButtons  productData={product}/>
      
    </div>
  );
};

export default ShCard;
