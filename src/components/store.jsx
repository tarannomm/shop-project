import React, { useContext } from "react";
import { productsContext } from "../context/productsPrivider";
import Card from "./shared/card";

const Store = () => {
  const products = useContext(productsContext);
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
