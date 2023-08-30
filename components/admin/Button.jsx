const Button = ({ variant, label, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`py-2 px-4 rounded-lg border-2 duration-300 disabled:cursor-not-allowed ${
        variant === 'primary' &&
        'hover:bg-neutral-900/20 border-neutral-400 active:border-white bg-neutral-900 text-white'
      } ${
        variant === 'danger' &&
        'hover:bg-rose-700 border-neutral-400 active:border-white bg-rose-700/80 text-white'
      } ${
        variant === 'outline' &&
        'hover:bg-neutral-100/80 border-neutral-400 active:border-white bg-neutral-200 text-black'
      }`}>
      {label}
    </button>
  );
};
export default Button;
