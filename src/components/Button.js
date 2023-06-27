const Button = ({ text, onClick, className, type }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-800 border-blue-800 border-2 text-white ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
export default Button;
