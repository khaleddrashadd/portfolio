const Input = ({ label, className, ...rest }) => {
  return (
    <input
      {...rest}
      placeholder={label}
      className={`placeholder:text-gray-600 px-4  h-10 border-2 rounded-lg text-lg pl-2 border-gray-400 placeholder-transparent focus:outline-none focus:border-sky-400 ${className}`}
    />
  );
};
export default Input;
