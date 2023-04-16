import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import './ProductLoopItem.css'

const ProductLoopItem = (props) => {
    const {img, name, seller, price} = props.product;
    return (
        <div className='product-loop-item'>
            <div className="image-container">
                <img src={img} alt={name} />
            </div>
            <div className="description-container">
                <h3 className="product-name">{name}</h3>
                <p className='seller'><small>By: {seller}</small></p>
                <p className='price'>${price}</p>
                 
                 <div className="btn-container">
                    <button className='cart-button' onClick={() => {props.addToCartHandler(props.product)}}><FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>
                    <button className='remove-button' onClick={() => {props.removeProductHandler(props.product)}}><FontAwesomeIcon icon={faCircleMinus} /> Remove from list</button>
                 </div>
            </div>
        </div>
    );
};

export default ProductLoopItem;