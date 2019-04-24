import React from 'react';

const TextBox = ({
  type,
  value,
  onChange,
  placeHolder,
  maxLength,
  className,
}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeHolder}
    maxLength={maxLength}
    className={className}
  />
);
export default TextBox;
