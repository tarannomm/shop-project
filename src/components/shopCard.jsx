import React from 'react';
import { useContext } from 'react';
import {reducerContext} from '../context/reducerContextProvider';
import ShCard from "./shared/ShCard";
import empty from "../images/empty.png";
const ShopCard = () => {
    const { state, dispatch } = useContext(reducerContext);
    return (
        <div>
             {state.selectedItems.length?state.selectedItems.map(item=><ShCard key={item.id} product={item}/>):<div className={styles.empty}>the shop cart is empty!are you want to back to shop?</div>}
            
        </div>
    );
};

export default ShopCard;