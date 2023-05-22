import React, { useContext } from "react";
import { productsContext } from "../context/productsPrivider";
import Card from "./shared/card";
import Navbar from "./shared/Navbar";
import styles from "../styles/css/store.module.css";
import ReducerContextProvider from "../context/reducerContextProvider";
const Store = () => {
  const products = useContext(productsContext);
  return (
    <div>
     
      
      <div className={styles.storeContainer}>
      
      {products.map((product) => (
        <Card key={product.id} productData={product} />
      ))}
    </div>

    </div>
    
  );
};

export default Store;
