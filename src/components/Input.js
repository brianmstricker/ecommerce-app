const Input = ({ className, type, placeholder, required, value, onChange }) => {
  return (
    <input
      className={`p-2 rounded-md bg-gray-600 ${className}`}
      placeholder={placeholder}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
