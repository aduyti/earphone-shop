import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({ items, clickHandler }) => {
    const { removeClickHandler, chooseOne, emptyCart } = clickHandler;
    return (
        <div className="cart-container">
            <div>Cart Summary<br /><small>(you can buy 4 earphone)</small></div>
            <div style={{ fontSize: '16px', color: 'gray' }}>Earphone Selected: {items.length}</div>
            <div>
                {
                    items.map((item) => <CartItem key={item.id}
                        item={item}
                        clickHandler={removeClickHandler} />)
                }
            </div>
            <div style={{ color: 'gray' }}>
                Total Price: ${(items.reduce((total, item) => total + item.price, 0)).toFixed(2)}
            </div>
            <div>
                <button className="choose-btn"
                    onClick={() => chooseOne(items.length)}>Choose 1 For Me</button>
            </div>
            <div>
                <button className="choose-btn"
                    onClick={emptyCart}> Choose Again</button>
            </div>

        </div >
    );
};

export default Cart;