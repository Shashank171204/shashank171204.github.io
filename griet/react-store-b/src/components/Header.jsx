import "./Header.css";
import { Link } from "react-router-dom"
import { useContext } from "react"
import {appContext} from "../App"
export default function Header() {
  const { user, setUser,cart,products } = useContext(appContext);
  const items = products.filter((value) => cart[value.id] > 0);
    return (
    <div class="container">
      <div class="row">
        <h1>My React <span class="black">Store</span></h1>
        <div class="border"></div>
        <Link to="home" class="home">Home</Link>
        <Link to="cart" class="cart">Cart({items.length})</Link>
        {user.email === "" ? (
          <Link to="login" class="login">Login</Link>
        ) : (
          <Link to="login" onClick={() => setUser({ ...user, name: "", email: "" ,password: "" })} class="login">
            Logout
          </Link>
        )}
        <div class="border1"></div>
      </div>
    </div>
  );
}