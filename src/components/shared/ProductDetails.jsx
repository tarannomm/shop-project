import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { productsContext } from "../../context/productsPrivider";
import styles from "../../styles/css/detail.module.css";
import ShopButtons from "./ShopButtons";
const ProductDetails = () => {
  const data = useContext(productsContext);

  const params = useParams();
  const id = params.id;

  const product = data[id - 1];

  const { image, title, description, category, price } = product;
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <img className={styles.productImage} src={image} />
        <div className={styles.detailContainer}>
          <h3>{title}</h3>
          <p>{description}</p>
          <span className={styles.category}>
            <span>category: </span>
            {category}
          </span>
          <br/>
          <br/>
          
          <span className={styles.price}>{price} $</span>
          <div className={styles.boxes}>
            <Link to="/products">Back to shop</Link>
            <ShopButtons productData={product}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
