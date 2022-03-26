import React, { useEffect, useState } from 'react';
import {
    addProductToCart,
    removeProductFromCart,
    removeAllProductsFromCart,
    keepOne,
    getStoredCart
} from '../../Utility/accessData.js'
import Cart from '../Cart/Cart.js';
import Products from '../Products/Products.js';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    useEffect(() => {
        setCartItems(getStoredCart());
    }, [])
    const addClickHandler = id => {
        const product = products.find(product => product.id === id);
        if (addProductToCart(product)) setCartItems([...cartItems, product]);
    }
    const removeClickHandler = id => {

        removeProductFromCart(id);
        setCartItems(cartItems.filter(item => item.id !== id));
    }
    const chooseOne = max => {
        const chosen = Math.floor(Math.random() * max);
        keepOne(cartItems[chosen].id);
        setCartItems([cartItems[chosen]]);
    }
    const emptyCart = () => {
        removeAllProductsFromCart();
        setCartItems([]);
    }
    return (
        <div className="shop">
            <Products products={products}
                clickHandler={addClickHandler} />
            <Cart items={cartItems}
                clickHandler={{ removeClickHandler, chooseOne, emptyCart }} />
        </div>
    );
};

export default Shop;