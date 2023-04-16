import React from 'react';
import './Shop.css';
import ProductLoop from '../ProductLoop/ProductLoop';

const Shop = () => {
    return (
        <div className='shop'>
            <ProductLoop limit='10'></ProductLoop>
        </div>
    );
};

export default Shop;