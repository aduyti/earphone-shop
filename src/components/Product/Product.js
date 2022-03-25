import React from 'react';
import './Product.css';

const Product = ({ product, clickHandler }) => {
    const { image, name, price, id } = product;
    return (
        <div className="product-card">
            <img className="card-img" src={image} alt={name} />
            <div className="card-info">
                <h3 style={{ marginBottom: '10px' }}>{name}</h3>
                <h4 style={{ margin: '0', color: 'darkgrey' }}>Price: ${price}</h4>
            </div>
            <button className="card-btn" onClick={() => clickHandler(id)}>Add to Cart <i className="bi bi-cart-plus"></i></button>
        </div>
    );
};

export default Product;