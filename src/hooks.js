import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

const Header = ({text}) => {
  // textが更新されるたびにdocument.titleを更新する
  useEffect(() => {
    document.title = text;
  }, [text]);
  return <header>{text}</header>;
};

ReactDOM.render(<Header text="foo" />, document.querySelector('#app'));
