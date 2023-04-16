import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './ProductLoop.css';
import ProductLoopItem from '../ProductLoopItem/ProductLoopItem';

const ProductLoop = (props) => {
    let products = fakeData;
    if (props.limit)
    {
        try {
            products =fakeData.slice(0, parseInt(props.limit));
        } catch (error) {
            alert(error);
        }
        
    }
    const [productList, setProductList] = useState(products);

    return (
        <div className='product-loop'>
            {
                productList.map(product =>  <ProductLoopItem product={product} addToCartHandler={props.addToCartHandler}></ProductLoopItem> )
            }
        </div>
    );
};

export default ProductLoop;