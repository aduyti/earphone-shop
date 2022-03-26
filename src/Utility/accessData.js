const addProductToCart = product => {
    let cart = JSON.parse(localStorage.getItem('earphoneCart')) || [];
    if (cart.length === 4) {
        window.alert("Maximum 4 Earphone is Already Added");
    }
    else if (cart.find(item => item.id === product.id)) {
        window.alert("This Earphone Already Added!");
    }
    else {
        cart = [...cart, product];
        localStorage.setItem('earphoneCart', JSON.stringify(cart));
    }
}
const getCart = () => {
    return JSON.parse(localStorage.getItem('earphoneCart'));
}
const removeProductFromCart = id => {
    console.log(id);
}
const removeAllProductsFromCart = () => {
    console.log("all");
}
export { addProductToCart, removeProductFromCart, removeAllProductsFromCart };