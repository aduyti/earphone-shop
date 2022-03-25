import React, { useEffect, useState } from 'react';
import { addProductToCart } from '../../Utility/accessData.js'
import Product from '../Product/Product';

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
        <div>
            {
                products.map(product => <Product product={product} key={product.id} clickHandler={clickHandler} />)
            }
        </div>
    );
};

export default Shop;