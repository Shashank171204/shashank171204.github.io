import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Log from "./components/Log";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="home" element={<Main />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Log />}/>
        <Route path="register" element={<Register />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;