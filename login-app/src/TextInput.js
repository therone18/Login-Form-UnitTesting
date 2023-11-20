// TextInput.js
import React from 'react';

const TextInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;