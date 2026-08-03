import React from 'react';

const Input = ({ type = 'text', name, placeholder = '', label, colour, value, valueChange }) => {
  return (
    <div className="input-container">
      <p>{label}</p>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => valueChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
