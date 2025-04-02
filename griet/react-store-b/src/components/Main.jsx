import './Main.css'
import { appContext } from "../App";
import { useContext } from "react";
export default function Main() {
  const { user, cart, setCart, products } = useContext(appContext);
  const addToCart = (value) => {
    setCart({ ...cart, [value]: 1 })
  }
  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  return (
    <div>
      <h3>{user.name}</h3>
      <div class="app">
        {products.map((value, index) => (
          <div class="row-app" key={index}>
            <p><img src={value.url} alt="error" /></p>
            <p><span>Product Name: </span>{value.name}</p>
            <p><span>Price: </span>${value.price}</p>
            {cart[value.id] > 0 ? (
                <p><button onClick={()=>decrement(value.id)}>-</button>
                {cart[value.id]}
                <button onClick={()=>increment(value.id)}>+</button></p>
            ):( <p><button class="btn" onClick={() => addToCart(value.id)}>Add to Cart</button></p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
