import React from 'react';

interface Props {
  list: string[];
  selectedItem: string;
  onChange: (arg: React.FormEvent<HTMLSelectElement>) => any;
  initialMessage?: string;
  className?: string;
}

const SelectBox: React.FC<Props> = ({
  list,
  selectedItem,
  onChange,
  initialMessage = '',
  className,
}) => (
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
      list.map(
        (item: string): React.ReactElement => (
          <option key={item} value={item}>
            {item}
          </option>
        )
      )}
  </select>
);
export default SelectBox;
