import React from 'react';
import './Shop.css';
import ProductLoop from '../ProductLoop/ProductLoop';

const Shop = (props) => {
    return (
        <div className='shop'>
            <ProductLoop limit='10' addToCartHandler={props.addToCartHandler}></ProductLoop>
        </div>
    );
};

export default Shop;