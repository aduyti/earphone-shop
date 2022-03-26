import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({ items, clickHandler }) => {
    return (
        <div className="cart-container">
            <div>Your Cart</div>
            <div>
                {
                    items.map((item) => <CartItem item={item} clickHandler={clickHandler} />)
                }
            </div>

        </div>
    );
};

export default Cart;