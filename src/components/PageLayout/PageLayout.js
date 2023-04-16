import React from 'react';
import './PageLayout.css';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';

const PageLayout = (props) => {
    return (
        <div className='container'>
            <div className='column-left'>
                <Shop addToCartHandler={props.addToCartHandler}></Shop>
            </div>
            <div className='column-right'>
                <Cart cart={props.cart}></Cart>
            </div>
        </div>
    );
};

export default PageLayout;