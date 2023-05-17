import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { reduserContext } from '../../context/reduserContextPrivider';
import { shorten,isInCart, quantityCount  } from '../../helper/functions';

const Card = (props) => {
    const {image,title,price,id}=props.productData;
    const {state,dispatch}=useContext(reduserContext);
    return (
        <div>
            <img src={image} alt='product'/>
            <h1>{shorten(title)}</h1>
            <span>{price}</span>
            <div>
                <Link to={`products/${id}`}>Details</Link>
                {!isInCart(state,id)?<button onClick={()=>dispatch({type:"ADD_ITEM",payload:productData})}>add to cart</button>:<button onClick={()=>dispatch({type:"INCREASE",payload:productData})}>+</button>
                 }
                 {quantityCount(state,id)>1 && <button onClick={()=>dispatch({type:"DECREASE"})}>-</button>}
                 {quantityCount(state,id)===1 && <button onClick={()=>dispatch({type:"REMOVE"})}>remove</button>}

                
            </div>
        </div>
    );
};

export default Card;