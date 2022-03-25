import React from 'react';
import './Product.css';

const Product = ({ product, clickHandler }) => {
    const { image, name, price } = product;
    return (
        <div className="product-card">
            <img className="card-img" src={image} alt={name} />
            <div className="card-info">
                <h3 style={{ marginBottom: '10px' }}>{name}</h3>
                <h4 style={{ margin: '0', color: 'darkgrey' }}>Price: ${price}</h4>
            </div>
        </div>
    );
};

export default Product;