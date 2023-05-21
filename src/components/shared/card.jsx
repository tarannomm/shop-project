import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { reducerContext } from "../../context/reducerContextProvider";
import { shorten, isInCart, quantityCount } from "../../helper/functions";
import trash from "../../assets/trash.svg";
import styles from "../../styles/css/card.module.css";
const Card = (props) => {
  const { image, title, price, id } = props.productData;
  const { state, dispatch } = useContext(reducerContext);
  return (
    <div className={styles.productContainer}>
      <img src={image} alt="product" />
      <h3>{shorten(title)}</h3>
      <span>{price} $</span>
      <div className={styles.bottomContainer}>
        <Link to={`products/${id}`}>Details</Link>
        <div className={styles.buttonsPart}>
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
        {quantityCount(state, id) > 1 &&  <button onClick={() => dispatch({ type: "DECREASE",payload:props.productData })}>-</button>
        }
        {quantityCount(state, id) === 1 && 
          <button onClick={() => dispatch({ type: "REMOVE_ITEM" , payload:props.productData})}><img src={trash} alt="trash"/></button>
        }</div>
      </div>
    </div>
  );
};

export default Card;
