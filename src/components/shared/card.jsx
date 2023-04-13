import React from 'react';
import { shorten } from './shorten';

const Card = (props) => {
    const {image,title,price}=props.productData;
    return (
        <div>
            <img src={image} alt='product'/>
            <h1>{shorten(title)}</h1>
            <span>{price}</span>
            <div>
                <a>Details</a>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Card;