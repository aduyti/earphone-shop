const addProductToCart = product => {
    let cart = JSON.parse(localStorage.getItem('earphoneCart')) || [];
    if (cart.length === 4) {
        window.alert("Maximum 4 Earphone is Already Added!");
    }
    else if (cart.find(item => item.id === product.id)) {
        window.alert("This Earphone Already Added!");
    }
    else {
        cart = [...cart, product];
        localStorage.setItem('earphoneCart', JSON.stringify(cart));
        return true;
    }
    return false;
}
const getStoredCart = () => {
    return JSON.parse(localStorage.getItem('earphoneCart')) || [];
}
const removeProductFromCart = id => {
    let cart = JSON.parse(localStorage.getItem('earphoneCart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('earphoneCart', JSON.stringify(cart));
}
const removeAllProductsFromCart = () => {
    localStorage.removeItem('earphoneCart');
}
const keepOne = id => {
    let cart = JSON.parse(localStorage.getItem('earphoneCart')) || [];
    cart = cart.filter(item => item.id === id);
    localStorage.setItem('earphoneCart', JSON.stringify(cart));
}
export {
    addProductToCart,
    removeProductFromCart,
    removeAllProductsFromCart,
    getStoredCart,
    keepOne
};