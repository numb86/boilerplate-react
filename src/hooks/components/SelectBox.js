import React from 'react';

const SelectBox = ({list, selectedItem, onChange, initialMessage = ''}) => (
  <select value={selectedItem || initialMessage} onChange={onChange}>
    {!selectedItem && (
      <option disabled value={initialMessage}>
        {initialMessage}
      </option>
    )}
    {list &&
      list.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
  </select>
);
export default SelectBox;
