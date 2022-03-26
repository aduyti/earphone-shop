import React from 'react';
import './CartItem.css'

const CartItem = ({ item, clickHandler }) => {
    const { image, name, price, id } = item;
    return (
        <div className="cart-item">
            <img className="cart-img" src={image} alt={name} />
            <div className="item-text">{name}</div>
            <div className="item-price item-text">${price}</div>
            <div className=" item-btn item-text" onClick={() => clickHandler(id)}><i className="bi bi-trash-fill"></i></div>
        </div>
    );
};

export default CartItem;