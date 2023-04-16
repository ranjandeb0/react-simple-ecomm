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

    const removeProductFromList = (product) => {
        setProductList(productList.filter(pd => pd.key !== product.key));
    }
    return (
        <div className='product-loop'>
            {
                productList.map(product =>  <ProductLoopItem product={product} removeProductHandler={removeProductFromList} addToCartHandler={props.addToCartHandler}></ProductLoopItem> )
            }
        </div>
    );
};

export default ProductLoop;