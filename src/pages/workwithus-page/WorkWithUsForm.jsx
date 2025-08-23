import * as Yup from "yup";
import { useFormik } from "formik";
import { MainButton, MainInput } from "@/components";

const SignupSchema = Yup.object({
  nombre: Yup.string().required("Es requerido"),
  apellido: Yup.string().required("Es requerido"),
  correo: Yup.string()
    .email("Ingresa un correo valido")
    .required("Es requerido"),
  telefono: Yup.string().required("Es requerido"),
  departamento: Yup.string().required("Es requerido"),
  distrito: Yup.string().required("Es requerido"),
  area: Yup.string().required("Es requerido"),
  cv: Yup.string().required("Es requerido"),
});

export default function WorkWithUsForm() {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      departamento: "",
      distrito: "",
      area: "",
      cv: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <MainInput
          label="Nombres:"
          name="nombre"
          placeholder="Nombres"
          value={values.nombre}
          onChange={handleChange}
          errorMessaje={errors.nombre}
        />
        <MainInput
          label="Apellidos:"
          name="apellido"
          placeholder="Apellidos"
          value={values.apellido}
          onChange={handleChange}
          errorMessaje={errors.apellido}
        />
      </div>
      <div className="form-row">
        <MainInput
          label="Correo:"
          type="email"
          name="correo"
          placeholder="email"
          value={values.correo}
          onChange={handleChange}
          errorMessaje={errors.correo}
        />
        <MainInput
          label="Telefono:"
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={values.telefono}
          onChange={handleChange}
          errorMessaje={errors.telefono}
        />
      </div>
      <div className="form-row">
        <MainInput
          label="Departamento:"
          name="departamento"
          placeholder="Departamento"
          value={values.departamento}
          onChange={handleChange}
          errorMessaje={errors.departamento}
        />
        <MainInput
          label="Distrito:"
          name="distrito"
          placeholder="Distrito"
          value={values.distrito}
          onChange={handleChange}
          errorMessaje={errors.distrito}
        />
      </div>
      <MainInput
        label="Área de Solicitud:"
        type="text"
        name="area"
        placeholder="Solicitud"
        value={values.area}
        onChange={handleChange}
        errorMessaje={errors.area}
      />
      <MainInput
        label="Adjuntar CV:"
        type="file"
        name="cv"
        placeholder="Solicitud"
        value={values.cv}
        onChange={handleChange}
        errorMessaje={errors.cv}
      />

      <MainButton>ENVIAR</MainButton>
    </form>
  );
}
