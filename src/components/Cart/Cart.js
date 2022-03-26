import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({ items, clickHandler }) => {
    return (
        <div className="cart-container">
            <div>Cart Summary</div>
            <div>
                {
                    items.map((item) => <CartItem key={item.id} item={item} clickHandler={clickHandler} />)
                }
            </div>
            <div> Total Price: ${(items.reduce((total, item) => total + item.price, 0)).toFixed(2)}</div>
            <div><button className="choose-btn">Choose 1 For Me</button></div>
            <div><button className="choose-btn">Choose Again</button></div>

        </div>
    );
};

export default Cart;