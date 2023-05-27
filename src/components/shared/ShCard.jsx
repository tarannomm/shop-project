import React from "react";

const ShCard = () => {
  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <span>{price} $</span>
      </div>
      <span>{quantity}</span>

      {/* <ShopButtons  productData={props.productData}/> */}
      
    </div>
  );
};

export default ShCard;
