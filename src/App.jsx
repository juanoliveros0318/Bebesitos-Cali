import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BabyStore from "./components/BabyStore";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";  // ⬅️ Agregamos Navbar
import About from "./components/About";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [totalPrice, setTotalPrice] = useState(() => {
    const savedTotal = localStorage.getItem("totalPrice");
    return savedTotal ? JSON.parse(savedTotal) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [cart, totalPrice]);

  const updateTotal = (newCart) => {
    const newTotal = Object.values(newCart).reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(newTotal);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[product.id] = newCart[product.id]
        ? { ...newCart[product.id], quantity: newCart[product.id].quantity + 1 }
        : { ...product, quantity: 1 };
      updateTotal(newCart);
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
    setTotalPrice(0);
    localStorage.removeItem("cart");
    localStorage.removeItem("totalPrice");
  };

  return (
    <Router>
      <Navbar />  {/* ⬅️ Agregamos el Navbar */}
      <Routes>
       <Route path="/" element={<BabyStore cart={cart} addToCart={addToCart} />} />
       <Route path="/checkout" element={<Checkout cart={cart} totalPrice={totalPrice} clearCart={clearCart} />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<About />} />
     </Routes>

    </Router>
  );
}

export default App;