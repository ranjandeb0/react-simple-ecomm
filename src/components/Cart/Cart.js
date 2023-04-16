import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    
    const productPrice = formatNumber(cart.reduce((total, product) => total + product.price, 0));

    const tax = formatNumber(productPrice/10);

    let shipping = 0;

    if( productPrice > 50){
        shipping = 0;
    }
    else if (productPrice > 25){
        shipping = 4.99;
    }
    else if (productPrice > 0){
        shipping = 9.99;
    }

    const total = formatNumber(productPrice + tax + shipping);

    return (
        <div className='cart'>
            <h4 className='cart-title'>Order Summery</h4>
            <p>Items in the cart: {cart.length}</p>
            <p>Product Price: {productPrice}</p>
            <p>Tax: {tax}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cart;