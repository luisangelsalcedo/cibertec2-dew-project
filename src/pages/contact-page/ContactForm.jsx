import React from "react";
import "./ContactForm.scss";

export default function ContactForm() {
  return (
    <div className="formulario">
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Ingresa tu apellido"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="asunto">Asunto:</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            placeholder="Ingresa el asunto"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribir mensaje"
          />
        </div>

        <button type="submit" className="btn">ENVIAR</button>
      </form>
    </div>
  );
}
