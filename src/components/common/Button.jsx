const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
