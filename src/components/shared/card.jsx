import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { reducerContext } from "../../context/reducerContextProvider";
import { shorten, isInCart, quantityCount } from "../../helper/functions";
import trash from "../../assets/trash.svg";
const Card = (props) => {
  const { image, title, price, id } = props.productData;
  const { state, dispatch } = useContext(reducerContext);
   console.log(state);
  return (
    <div>
      <img src={image} alt="product" />
      <h1>{shorten(title)}</h1>
      <span>{price}</span>
      <div>
        <Link to={`products/${id}`}>Details</Link>
        {!isInCart(state, id) ? (
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: props.productData })}
          >
            add to cart
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.productData })}
          >
            +
          </button>
        )}
        {quantityCount(state, id) > 1 &&  <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
        }
        {quantityCount(state, id) === 1 && 
          <button onClick={() => dispatch({ type: "REMOVE" })}><img src={trash} alt="trash"/></button>
        }
      </div>
    </div>
  );
};

export default Card;
