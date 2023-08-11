export default function Dropdown({ options }) {
  return (
    <select>
      <option value="Country">Country</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.displayValue}
          </option>
        );
      })}
    </select>
  );
}
