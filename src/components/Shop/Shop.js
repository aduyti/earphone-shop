import React, { useEffect, useState } from 'react';
import { addProductToCart, removeProductFromCart } from '../../Utility/accessData.js'
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
    const addClickHandler = id => {
        const product = products.find(product => product.id === id);
        if (addProductToCart(product)) setCartItems([...cartItems, product]);
    }
    const removeClickHandler = id => {

        removeProductFromCart(id);
        setCartItems(cartItems.filter(item => item.id !== id));
    }
    return (
        <div className="shop">
            <Products products={products} clickHandler={addClickHandler} />
            <Cart items={cartItems} clickHandler={removeClickHandler} />
        </div>
    );
};

export default Shop;