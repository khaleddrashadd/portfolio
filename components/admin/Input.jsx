const Input = ({ label,className, ...rest }) => {
  return (
    <div className="px-4 relative w-96">
      <input
        {...rest}
        placeholder=" "
        className={`peer h-10 w-full border-2 rounded-lg text-lg pl-2 border-gray-400 placeholder-transparent focus:outline-none focus:border-sky-400 ${className}`}
      />
      <label
        htmlFor="name"
        className="text-gray-600 absolute left-6 top-2 peer-placeholder-shown:scale-100 scale-0">
        {label}
      </label>
    </div>
  );
};
export default Input;
