import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { appContext } from "../App";
export default function Cart() {
  const { products, cart, setCart } = useContext(appContext);
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
    </div>
  );
}