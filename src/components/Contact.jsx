import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>📩 Contáctanos</h1>
      {submitted ? (
        <p className="success-message">¡Gracias por tu mensaje! Te responderemos pronto. 😊</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Nombre:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Mensaje:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />

          <button type="submit">Enviar</button>
        </form>
      )}
      <button className="back-button" onClick={() => navigate("/")}>🏠 Volver a la tienda</button>
    </div>
  );
}

export default Contact;
