import "./App7.css";
import { useState } from "react";
export default function App7() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const handleSubmit = () => {
    setProducts([...products, product]);
  };
  return (
    <div className="container">
      <div>
        <h3 style={{ textAlign: "center"}}>Billing Form</h3>
        <p>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="number"
            placeholder="Quantity"
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
          ></input>
        </p>
        <p style={{ textAlign: "center" }}>
          <button onClick={handleSubmit}>Submit</button>
        </p>
      </div>
      <div class="wrapper">
        <h4>Items</h4>
        <table border="1" >
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>quantity</td>
            <td>Amount</td>
          </tr>
          {products &&
            products.map((value, index) => (
              <tr>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.quantity}</td>
                <td>{value.price*value.quantity}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}