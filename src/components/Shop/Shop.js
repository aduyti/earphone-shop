import React, { useEffect, useState } from 'react';
import { addProductToCart } from '../../Utility/accessData.js'
import Cart from '../Cart/Cart.js';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    const clickHandler = id => {
        addProductToCart(id);
    }
    return (
        <div className="shop">
            <div className="products">
                {
                    products.map(product => <Product product={product} key={product.id} clickHandler={clickHandler} />)

                }
            </div>
            <Cart />
        </div>
    );
};

export default Shop;