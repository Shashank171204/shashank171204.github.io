const products = [
    { id: 1, name: "P1", price: 34 },
    { id: 2, name: "P2", price: 50 },
    { id: 3, name: "P3", price: 40 },
];
const cart = {};
const increment = (id) => {
    cart[id] = cart[id] + 1;
    showCart();
};
const displayProduct=()=>{
    productbox.style.display="block";
}
const hideProduct=()=>{
    productbox.style.display="none";
}
const displayCart=()=>{
    cartbox.style.display="block";
};
const hidecart=()=>{
    cartbox.style.display="none";
}
const decrement = (id) => {
    cart[id] = cart[id] - 1;
    cart[id] < 1 && delete cart[id];
    console.log(cart);
    showCart();
};
const deleteCart=(id)=>{
    delete cart[id]
    showCart();
};
const addToCart = (id) => {
    cart[id] = 1;
    showCart();
};
const showCart = () => {
    let str = "";
    products.map((value) => {
    if (cart[value.id]) {
        str += `<div>${value.id}-${value.name}-${value.price}-<button onclick="decrement(${value.id})">
            -</button>${cart[value.id]}<button onclick="increment(${value.id})">+</button>-${value.price*cart[value.id]}
            <button onclick="deleteCart(${value.id})">delete</button></div>`;
    }
    });
    divCart.innerHTML = str;
    let count=Object.keys(cart).length;
    document.getElementById("count").innerHTML=count;
    showTotal();
};
const showTotal = () => {
    let total = products.reduce((sum, value) => {
        return sum + value.price * (cart[value.id] ? cart[value.id] : 0);
    }, 0);
    divTotal.innerHTML =`Order Value: $${total}`;
};
const showProducts = () => {
    let str = "";
    products.map((value) => {
        str += `<div>${value.id}-${value.name}-${value.price}-
            <button onclick='addToCart(${value.id})'>Add to Cart</button></div>`;
    });
    divProducts.innerHTML = str;
};