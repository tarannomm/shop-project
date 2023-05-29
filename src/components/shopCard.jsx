import React from "react";
import { useContext } from "react";
import { reducerContext } from "../context/reducerContextProvider";
import ShCard from "./shared/ShCard";
import styles from "../styles/css/shopcart.module.css";
import { Link } from "react-router-dom";
import empty from "../images/empty.png";
const ShopCard = () => {
  const { state, dispatch } = useContext(reducerContext);
  return (
    <div>
      {state.selectedItems.length ? (
        state.selectedItems.map((item) => (
          <ShCard key={item.id} product={item} />
        ))
      ) : (
        <div className={styles.empty}>
            <p>Your shopping cart is empty!!</p>
          <img src={empty} alt="empty" />
          <Link to="/products">Back to shop</Link>
          
        </div>
      )}
    </div>
  );
};

export default ShopCard;
