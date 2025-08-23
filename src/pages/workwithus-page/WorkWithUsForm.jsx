import { useFormik } from "formik";
import * as Yup from "yup";
import "./workwithusform.scss";
import { usePopup } from "@/components/popup";

const SignupSchema = Yup.object({
  nombre: Yup.string().required("Se requiere el nombre"),
  apellidos: Yup.string().required("Se requiere los apellidos"),
  correo: Yup.string().required("Se requiere el correo"),
  telefono: Yup.string().required("Se requiere el telefono"),
  departamento: Yup.string().required("Se requiere el departamento"),
  distrito: Yup.string().required("Se requiere el distrito"),
  area: Yup.string().required("Está vacío"),
});

export default function WorkWithUsForm() {
  const { openModal } = usePopup();

  const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
        nombre: "",
        apellidos: "",
        correo: "",
        telefono: "",
        departamento:"",
        distrito: "",
        area: "",
      },

    validationSchema: SignupSchema,
    onSubmit: (value) => {
      openModal(
        <h1>
          Gracias {value.nombre} por querer trabajar con nosotros.
        </h1>
      );
    },
  });

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu nombre"
              value={values.nombre}
              onChange={handleChange}
            />
            <span className="error">{errors.nombre}</span>
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellidos:</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              placeholder="Ingresa tus apellidos"
              value={values.apellido}
              onChange={handleChange}
            />
            {errors.apellido}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="text"
            id="correo"
            name="correo"
            placeholder="Ingresa tu correo electrónico"
            value={values.correo}
            onChange={handleChange}
          />
          {errors.correo}
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Ingresa tu telefono"
            value={values.telefono}
            onChange={handleChange}
          />
          {errors.telefono}
        </div>

        <div className="form-row">
            <div className="form-group">
              <label htmlFor="Departamento">Departamento:</label>
                <input
                  type="text"
                  id="departamento"
                  name="departamento"
                  placeholder="Ingresa el departamento"
                  value={values.departamento}
                  onChange={handleChange}
                />
                {errors.departamento}
            </div>

            <div className="form-group">
              <label htmlFor="distrito">Distrito:</label>
                <input
                  type="text"
                  id="distrito"
                  name="distrito"
                  placeholder="Ingresa el distrito"
                  value={values.distrito}
                  onChange={handleChange}
                />
                {errors.distrito}
            </div>
        </div>

        <div className="form-group">
          <label htmlFor="area">Área de solicitud:</label>
            <input
              type="text"
              id="area"
              name="area"
              placeholder="Ingresa la solicitud"
              value={values.telefono}
              onChange={handleChange}
            />
            {errors.telefono}
        </div>
      </form>
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
}