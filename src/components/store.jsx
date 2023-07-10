import React, { useContext } from "react";
import { productsContext } from "../context/productsPrivider";
import Card from "./shared/card";
import styles from "../styles/css/store.module.css";
 import load from "../images/Loading_icon.gif";
const Store = () => {
  const products = useContext(productsContext);
  return (
    <div>
     
      
      <div className={styles.storeContainer}>
      
      {products.length?products.map((product) => (
        <Card key={product.id} productData={product} />
      )):<img src={load} alt="loading"/>}
    </div>

    </div>
    
  );
};

export default Store;
