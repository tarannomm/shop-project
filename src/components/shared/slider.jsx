import React, { useContext } from 'react';
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { productsContext } from '../../context/productsPrivider';
import Card from './card';
const Sliders = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed:500,
      slidesToShow:4,
      slidesToScroll: 1
    };
      const products=useContext(productsContext);
    return (
        <div style={{width:'80%', margin:'20px auto'}}>
        <br/>
        <Slider {...settings}>
        {products.map(product=><Card key={product.id}  productData={product} />)}
        </Slider>
      </div>
    );
};

export default Sliders;