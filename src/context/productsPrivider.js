import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
const productsContext = createContext();
const productsProvider = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await api());
    };
    fetchApi();
  }, []);

  return (
    <productsContext.Provider value={products}>
      {props.children}
    </productsContext.Provider>
  );
};

export default productsProvider;
