import React from "react";
import "./BabyStore.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // 🎥 Importamos Framer Motion

const BabyStore = ({ cart, addToCart }) => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Biberón Anticólicos", price: 15, img: "/img/biberon.jpg" },
    { id: 2, name: "Pañales Premium", price: 25, img: "/img/pañales.jpg" },
    { id: 3, name: "Coche para Bebé", price: 150, img: "/img/coche.jpg" },
    { id: 4, name: "Juguete de Peluche", price: 20, img: "/img/peluche.jpg" }
  ];

  return (
    <motion.div 
      className="container"
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.header 
        className="header"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ type: "spring", stiffness: 100 }}
      >
        <h1 className="title">🍼 Tienda de Bebés</h1>
        <motion.button 
          className="cart-button" 
          onClick={() => navigate("/checkout")}
          whileHover={{ scale: 1.1 }}
        >
          🛒 Carrito ({Object.values(cart).reduce((sum, item) => sum + item.quantity, 0)})
        </motion.button>
      </motion.header>

      <div className="products-container">
        {products.map((product, index) => (
          <motion.div 
            key={product.id} 
            className="product-card"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <motion.button 
              className="add-to-cart" 
              onClick={() => addToCart(product)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Agregar al Carrito
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BabyStore;
