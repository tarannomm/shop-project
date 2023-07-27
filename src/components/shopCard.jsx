import React from "react";
import { useContext } from "react";
import { reducerContext } from "../context/reducerContextProvider";
import ShCard from "./shared/ShCard";
import styles from "../styles/css/shopcart.module.css";
import { Link } from "react-router-dom";
import empty from "../images/empty.png";
const ShopCard = () => {
  const { state, dispatch } = useContext(reducerContext);
  console.log(state);
  return (
    <div className={styles.container}>
      <div className={styles.productsContainer}>
        {!state.selectedItems.length && !state.clear && !state.checkout?(
          <div className={styles.empty}>
            <p>Your shopping cart is empty!!</p>
            <img src={empty} alt="empty" />
            <Link to="/products">Back to shop</Link>
          </div>
        ) : 

          ( state.selectedItems.map((item) => (
            <ShCard key={item.id} product={item} />
          ))
         
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
            <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR", })}>
              Clear
            </button>
            <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>
              Checkout
            </button>
          </div>
        </div>
      )}
      {state.checkout && <div className={styles.success}><h2>Checked out successfully</h2><Link to="/products">Buy more</Link></div>}
      {state.clear && <div className={styles.clearAll}><h2>cleared shop cart products</h2><Link to="/products">back to shop</Link></div>}
    </div>
  );
};

export default ShopCard;
