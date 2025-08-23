export function MainButton({ children, handler, ...props }) {
  return (
    <button className="btn" onClick={(e) => handler(e)} {...props}>
      {children}
    </button>
  );
}
