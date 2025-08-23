import * as Yup from "yup";
import { useFormik } from "formik";
// import { usePopup } from "@/components/popup";
import { MainButton, MainInput } from "@/components";
import "./contact-form.scss";

const SignupSchema = Yup.object({
  nombre: Yup.string().required("El nombre es requerido"),
  apellido: Yup.string().required("El apellido es requerido"),
  asunto: Yup.string().required("No has escrito el asunto"),
  mensaje: Yup.string().required("El mensaje esta vacio"),
});

export function ContactForm() {
  // const { openModal } = usePopup();

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      asunto: "",
      mensaje: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (value) => {
      console.log(value);
      // openModal(
      //   <h1>
      //     gracias {value.nombre} por escribirnos sobre {value.asunto}
      //   </h1>
      // );
    },
  });

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <MainInput
            label="Nombre:"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={values.nombre}
            onChange={handleChange}
            errorMessaje={errors.nombre}
          />

          <MainInput
            label="Apellido:"
            name="apellido"
            placeholder="Ingresa tu apellido"
            value={values.apellido}
            onChange={handleChange}
            errorMessaje={errors.apellido}
          />
        </div>

        <MainInput
          label="Asunto:"
          name="asunto"
          placeholder="Ingresa el asunto"
          value={values.asunto}
          onChange={handleChange}
          errorMessaje={errors.asunto}
        />

        <MainInput
          element="textarea"
          label="Mensaje:"
          name="mensaje"
          placeholder="Erscribe tu mensaje"
          value={values.mensaje}
          onChange={handleChange}
          errorMessaje={errors.mensaje}
        />

        {/* <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribir mensaje"
            value={values.mensaje}
            onChange={handleChange}
          />
          {errors.mensaje}
        </div> */}

        <MainButton type="submit">ENVIAR</MainButton>
      </form>
    </div>
  );
}
