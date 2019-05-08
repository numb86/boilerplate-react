import React from 'react';

const SelectBox = ({
  list,
  selectedItem,
  onChange,
  initialMessage = '',
  className,
}: any) => (
  <select
    value={selectedItem || initialMessage}
    onChange={onChange}
    className={className}
  >
    {!selectedItem && (
      <option disabled value={initialMessage}>
        {initialMessage}
      </option>
    )}
    {list &&
      list.map((item: any) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
  </select>
);
export default SelectBox;
