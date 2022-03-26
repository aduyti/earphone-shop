import React from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = ({ products, clickHandler }) => {
    return (
        <div className="products">
            {
                products.map(product => <Product product={product} key={product.id} clickHandler={clickHandler} />)
            }
        </div>
    );
};

export default Products;