import './Main.css'
import { appContext } from "../App";
import { useContext } from "react";
export default function Main() {
  const { user, cart, setCart, products } = useContext(appContext);
  const addToCart = (value) => {
    setCart({ ...cart, [value]: 1 })
  }
  return (
    <div>
      <h3>{user.name}</h3>
      <div class="app">
        {products.map((value, index) => (
          <div class="row-app" key={index}>
            <p><img src={value.url} alt="error" /></p>
            <p><span>Product Name: </span>{value.name}</p>
            <p><span>Price: </span>${value.price}</p>
            <p><button class="btn" onClick={() => addToCart(value.id)}>Add to Cart</button></p>
          </div>
        ))}
      </div>
    </div>
  )
}
