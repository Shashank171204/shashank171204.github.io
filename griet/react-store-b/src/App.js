import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Log from "./components/Log";
import Register from "./components/Register";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const appContext = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [cart,setCart]=useState({});
  const products = [
    {
      id: 1,
      name: 'Product1',
      price: 40,
      url:"https://picsum.photos/id/1/200/300"
    },
    {
      id: 2,
      name: 'Product2',
      price: 30,
      url:"https://picsum.photos/id/2/200/300"
    },
    {
      id: 3,
      name: 'Product3',
      price: 20,
      url:"https://picsum.photos/id/3/200/300"
    },
    {
      id: 4,
      name: 'Product4',
      price: 40,
      url:"https://picsum.photos/id/4/200/300"
    },
    {
      id: 5,
      name: 'Product5',
      price: 40.5,
      url:"https://picsum.photos/id/5/200/300"
    },
    {
      id: 6,
      name: 'Product6',
      price: 50,
      url:"https://picsum.photos/id/6/200/300"
    }
  ]
  return (
    <BrowserRouter>
    <appContext.Provider value={{ users, setUsers, user, setUser ,cart ,setCart ,products}}>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="home" element={<Main />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Log />}/>
        <Route path="register" element={<Register />}/>
      </Routes>
      <Footer />
      </appContext.Provider>
    </BrowserRouter>
  );
}
export default App;