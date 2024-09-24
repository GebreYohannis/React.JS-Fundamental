const Input = ({ name, label, value, onChange, type, placeholder, refs }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        ref={refs}
        name={name}
        type={type}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
