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
function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
    <appContext.Provider value={{ users, setUsers, user, setUser }}>
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