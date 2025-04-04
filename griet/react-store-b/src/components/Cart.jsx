import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { appContext } from "../App";
import { useNavigate } from "react-router-dom";
import './Cart.css'
export default function Cart() {
  const { products, cart, setCart, orders, setOrders, user } =
    useContext(appContext);
  const Navigate = useNavigate();
  const [orderValue, setOrderValue] = useState(0);
  const handleDelete = (id) => {
    setCart({ ...cart, [id]: 0 });
  };
  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  const placeOrder = () => {
    setOrders([
      ...orders,
      {
        email: user.email,
        orderDate: Date(),
        items: cart,
        status: "pending",
        total: orderValue,
      },
    ]);
    setCart({});
    Navigate("/orders");
  };
  useEffect(() => {
    setOrderValue(
      products.reduce((sum, value) => {
        return sum + value.price * (cart[value.id] ?? 0);
      }, 0)
    );
  }, [cart]);
  return (
    <div>
      <h2>My Cart</h2>
      {Object.keys(cart).length > 0 ? (
        <>
          {products.map(
            (value) =>
              cart[value.id] > 0 && (
                <div>
                  {value.name}-{value.price}-
                  <button onClick={() => decrement(value.id)}>-</button>
                  {cart[value.id]}
                  <button onClick={() => increment(value.id)}>+</button>-
                  {value.price * cart[value.id]}-
                  <button onClick={() => handleDelete(value.id)}>Delete</button>
                </div>
              )
          )}
          <h3>Order Value:{orderValue}</h3>
          <p>
            {user.email ? (
              <button onClick={placeOrder} class="place_order">Place Order</button>
            ) : (
              <button class="place_order" onClick={()=>Navigate("/login")}>Login to Order</button>
            )}
          </p>
        </>
      ) : (
        <h5>Your cart is Empty</h5>
      )}
    </div>
  );
}