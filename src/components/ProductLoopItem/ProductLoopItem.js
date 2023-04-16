import React from 'react';
import './ProductLoopItem.css'

const ProductLoopItem = (props) => {
    console.log(props.product)
    const {img, name, seller, price} = props.product;
    return (
        <div className='product-loop-item'>
            <div className="image-container">
                <img src={img} alt={name} />
            </div>
            <div className="description-container">
                <h3 className="product-name">{name}</h3>
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default ProductLoopItem;