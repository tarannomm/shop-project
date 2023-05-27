import React from 'react';
import {isInCart, quantityCount } from "../../helper/functions";
import { reducerContext } from "../../context/reducerContextProvider";
import { useContext } from 'react';
import styles from "../../styles/css/shopButtons.module.css";
import trash from "../../assets/trash.svg";
const ShopButtons = (props) => {
    const { state, dispatch } = useContext(reducerContext);
    const {id}=props.productData;
    return (
        <div className={styles.buttonsPart}>
        {!isInCart(state,id) ? (
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
        {quantityCount(state,id) === 1 && 
          <button onClick={() => dispatch({ type: "REMOVE_ITEM" , payload:props.productData})}><img src={trash} alt="trash"/></button>
        }</div>
    );
};

export default ShopButtons;