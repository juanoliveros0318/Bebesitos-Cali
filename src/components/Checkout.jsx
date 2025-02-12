import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Checkout.css";

const Checkout = ({ cart, totalPrice, clearCart }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="checkout-container"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="checkout-title"
        initial={{ x: -100 }} 
        animate={{ x: 0 }} 
        transition={{ type: "spring", stiffness: 100 }}
      >
        🛍️ Carrito de Compras
      </motion.h1>

      {Object.keys(cart).length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío 😢</p>
      ) : (
        <div>
          {Object.values(cart).map((item) => (
            <motion.div 
              key={item.id} 
              className="cart-item"
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              <img src={item.img} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
              </div>
            </motion.div>
          ))}
          <h2 className="total-price">Total: ${totalPrice}</h2>
          <motion.button 
            className="clear-cart"
            onClick={clearCart}
            whileHover={{ scale: 1.1 }}
          >
            Vaciar Carrito 🗑️
          </motion.button>
          <motion.button 
            className="back-store"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.1 }}
          >
            Volver a la Tienda 🛒
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default Checkout;
