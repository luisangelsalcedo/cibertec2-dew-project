import React, {useState} from "react";
import "./workwithus.scss";
export function WorkWithUs() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    departamento: "",
    distrito: "",
    area: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado ✅");
    console.log(formData);
  };

  return (
    <div className="work-section">
      {/* Título */}
      <h2 className="title">
        TRABAJA CON <span>NOSOTROS</span>
      </h2>

      <div className="work-content">
        {/* Formulario */}
        <form className="work-form" onSubmit={handleSubmit}>
          <div className="row2">
            <p>Nombres:</p>
            <p>Apellidos:</p>
          </div>
          <div className="row">
              <input
                type="text"
                name="nombre"
                placeholder="Nombres"
                value={formData.nombre}
                onChange={handleChange}
              />
              <input
                type="text"
                name="apellido"
                placeholder="Apellidos"
                value={formData.apellido}
                onChange={handleChange}
              />
            
          </div>
          <p>Correo:</p>
          <input
            type="email"
            name="correo"
            placeholder="email"
            value={formData.correo}
            onChange={handleChange}
          />
          <p>Telefono:</p>
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            />
          <div className="row2">
            <p>Departamento:</p>
            <p>Distrito:</p>
          </div>
          <div className="row">
            <input
              type="text"
              name="departamento"
              placeholder="Departamento"
              value={formData.departamento}
              onChange={handleChange}
            />
            <input
              type="text"
              name="distrito"
              placeholder="Distrito"
              value={formData.distrito}
              onChange={handleChange}
            />
          </div>
          <p>Área de Solicitud:</p>
          <input
            type="text"
            name="area"
            placeholder="Solicitud"
            value={formData.area}
            onChange={handleChange}
          />
        </form>
        {/* Imagen */}
        <div className="work-image">
          <img src="./src/assets/images/trabajaconnosotros.png" alt="" />
        </div>
      </div>
      <br />
      <div className="cv-box">
            <label className="cv-btn">
              ADJUNTAR CV
              <input
                type="file"
                name="cv"
                accept=".pdf"
                onChange={handleChange}
                hidden
              />
            </label>
            <p>Permitido subir archivo en formato PDF máx. 1 MB</p>
            <br />
            <button type="submit" className="submit-btn">
              ENVIAR
            </button>         
         </div>

          
    </div>
  );
  return <>WorkWithUs</>;
}