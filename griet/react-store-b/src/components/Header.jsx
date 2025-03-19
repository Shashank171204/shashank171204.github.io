import "./Header.css";
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div class="container">
      <div class="row">
        <h1>My React <span class="black">Store</span></h1>
        <div class="border"></div>
        <Link to="home" class="home">Home</Link>
        <Link to="cart" class="cart">Cart</Link>
        <Link to="login" class="login">Login</Link>
        <div class="border1"></div>
      </div>
    </div>
  );
}