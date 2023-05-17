import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { productsContext } from "../../context/productsPrivider";

const ProductDetails = () => {
 
  const data = useContext(productsContext);
   
  const params=useParams(); 
  const id=params.id;
   
  const product=data[id - 1];
  
  const { image, title, description, category, price } = product;
  return <div>
    <img src={image} alt="product"/>
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>category: {category}</p>
        <div>
            <span>price: {price}$</span>
            <Link to="/products">Back to shop</Link>
        </div>
    </div>
  </div>;
};

export default ProductDetails;
