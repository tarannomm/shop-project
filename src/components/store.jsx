import React, { useContext } from "react";
import { productsContext } from "../context/productsPrivider";
import Card from "./shared/card";
import styles from "../styles/css/store.module.css";
const Store = () => {
  const products = useContext(productsContext);
  return (
    <div className={styles.storeContainer}>
      {products.map((product) => (
        <Card key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
