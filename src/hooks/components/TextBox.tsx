import React from 'react';

// TODO: 完全に無意味なコンポーネントなので、あとで削除する
const TextBox: (arg: any) => React.ReactElement = ({
  type,
  value,
  onChange,
  placeHolder,
  maxLength,
  className,
}: any) => (
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
