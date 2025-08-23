import "./main-input.scss";

export function MainInput({ label, name, errorMessaje, element, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className={props.type == "file" ? "file" : null}>
        {!element && (
          <input
            type={props.type || "text"}
            id={name}
            name={name}
            className={errorMessaje ? "error" : null}
            {...props}
          />
        )}
        {props.type == "file" && (
          <p>Permitido subir archivo en formato PDF máx. 1 MB</p>
        )}
        {element == "textarea" && (
          <textarea
            id={name}
            name={name}
            className={errorMessaje ? "error" : null}
            {...props}
          ></textarea>
        )}
      </div>

      <div className="error-message">{errorMessaje}</div>
    </div>
  );
}
