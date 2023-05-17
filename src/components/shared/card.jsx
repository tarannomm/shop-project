import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { reduserContext } from '../../context/reduserContextPrivider';
import { isInCart } from '../../helper/isInCard';
import { shorten } from '../../helper/shorten';

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
                {isInCart(state,id)?<button>+</button>:<button>add to cart</button>}
                
            </div>
        </div>
    );
};

export default Card;