import React, { createContext, useEffect, useState } from "react";
import {getProducts } from "../services/api";
export const productsContext = createContext();
const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
      
    };
    fetchApi();
     
  }, []);

  return (
    <productsContext.Provider value={products}>
      {props.children}
    </productsContext.Provider>
  );
};

export default ProductsProvider;
