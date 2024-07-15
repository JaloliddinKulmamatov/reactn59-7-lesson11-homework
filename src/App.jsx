import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import { useSelector } from "react-redux"; // Import useSelector to get products from Redux store

function App() {
  const [cart, setCart] = useState([]);
  const products = useSelector((store) => store.productsReducer.products);

  return (
    <div>
      <Router>
        <header>
          <nav className="navbar">
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "activeLink" : "")}
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products cart={cart} setCart={setCart} />}
          />
          <Route path={`/products/:productId`} element={<Product />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} products={products} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
