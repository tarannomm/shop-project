import React from 'react';
import { Link } from 'react-router-dom';
import { shorten } from '../../helper/shorten';

const Card = (props) => {
    const {image,title,price,id}=props.productData;
    return (
        <div>
            <img src={image} alt='product'/>
            <h1>{shorten(title)}</h1>
            <span>{price}</span>
            <div>
                <Link to={`products/${id}`}>Details</Link>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Card;