export function MainButton({ children, ...props }) {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
}
