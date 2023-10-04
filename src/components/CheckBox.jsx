export const CheckBox = ({ title, name, value, handleCheckChange }) => {
  return (
    <div className="mb-3 form-check checkbox-area">
      <input
        type="checkbox"
        className="form-check-input"
        id={name}
        name={name}
        checked={value}
        onChange={handleCheckChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {title}
      </label>
    </div>
  );
};
