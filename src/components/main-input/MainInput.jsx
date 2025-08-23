import "./main-input.scss";

export function MainInput({ label, name, errorMessaje, element, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {!element && (
        <input
          type={props.type || "text"}
          id={name}
          name={name}
          className={errorMessaje ? "error" : null}
          {...props}
        />
      )}
      {element == "textarea" && (
        <textarea
          id={name}
          name={name}
          className={errorMessaje ? "error" : null}
          {...props}
        ></textarea>
      )}

      <div className="error-message">{errorMessaje}</div>
    </div>
  );
}
