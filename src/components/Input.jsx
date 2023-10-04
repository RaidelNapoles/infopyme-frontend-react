export const Input = ({
  title,
  name,
  value,
  handleSelectChange,
  placeholder,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        <strong>{title}</strong>
      </label>
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={handleSelectChange}
        placeholder={placeholder}
      />
    </div>
  );
};
