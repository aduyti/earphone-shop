import React, { useEffect, useState } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            {
                products.map(product => <img src={product.image} />)
            }
        </div>
    );
};

export default Shop;