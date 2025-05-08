import React, { useState } from "react";

function DropDown({ title, options, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <select
        className="dropdown-select"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onChange={handleChange}
      >
        <option value={title}>{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="dropdown-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

export default DropDown;
