import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

// IE11動作確認のためのコード
const x = {a: 1, b: 2};
const y = {a: 2, c: 3};
const z = {
  ...x,
  ...y,
};
console.log(z);

const asyncFunc = async (): Promise<void> => {
  const res = await fetch('http://localhost:8080');
  console.log(res.status);
};

asyncFunc();

const App: () => React.ReactElement = () => <>Hello React!</>;

ReactDOM.render(<App />, document.querySelector('#app'));
