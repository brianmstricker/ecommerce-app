const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-800 border-blue-800 border-2 ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;
