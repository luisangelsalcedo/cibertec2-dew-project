import * as Yup from "yup";
import { useFormik } from "formik";
import { usePopup } from "@/components/popup";
import { MainButton } from "@/components";
import "./contact-form.scss";

const SignupSchema = Yup.object({
  nombre: Yup.string().required("El nombre es requerido"),
  apellido: Yup.string().required("El apellido es requerido"),
  asunto: Yup.string().required("No has escrito el asunto"),
  mensaje: Yup.string().required("El mensaje esta vacio"),
});

export function ContactForm() {
  const { openModal } = usePopup();

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      asunto: "",
      mensaje: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (value) => {
      openModal(
        <h1>
          gracias {value.nombre} por escribirnos sobre {value.asunto}
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
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Ingresa tu apellido"
              value={values.apellido}
              onChange={handleChange}
            />
            {errors.apellido}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="asunto">Asunto:</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            placeholder="Ingresa el asunto"
            value={values.asunto}
            onChange={handleChange}
          />
          {errors.asunto}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribir mensaje"
            value={values.mensaje}
            onChange={handleChange}
          />
          {errors.mensaje}
        </div>

        <MainButton type="submit">ENVIAR</MainButton>
      </form>
    </div>
  );
}
