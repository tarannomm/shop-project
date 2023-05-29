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
    <div className={styles.container}>
      <div className={styles.productsContainer}>
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
      {state.itemCounter > 0 && (
        <div className={styles.totalContainer}>
          <p>
            <span>Total Items :</span>
            {state.itemCounter}
          </p>
          <p>
            <span>Total Peyment :</span>
            {state.total}
          </p>
          <div className={styles.buttonsPart}>
            <button className={styles.clear} onClick={() => dispatch({ type: "REMOVE_ITEM" })}>
              Clear
            </button>
            <button classname={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </button>
          </div>
        </div>
      )}
      {state.checkout && <div className={styles.checkout}><h3>Checked out successfully</h3><Link to="/products">Buy more</Link></div>}
    </div>
  );
};

export default ShopCard;
