export const Select = ({
  title,
  name,
  value,
  handleSelectChange,
  optionsList,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        <strong>{title}</strong>
      </label>
      <select
        className="form-select"
        name={name}
        value={value}
        onChange={handleSelectChange}
      >
        {optionsList.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
