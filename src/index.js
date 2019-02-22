import 'whatwg-fetch';
import ReactDOM from 'react-dom';

import App from './components/App';

// IE11動作確認のためのコード
const x = {a: 1, b: 2};
const y = {a: 2, c: 3};
const z = {
  ...x,
  ...y,
};
console.log(z);

const asyncFunc = async statusCode => {
  const res = await fetch(`https://httpbin.org/status/${statusCode}`);
  console.log(res.status);
};

asyncFunc(200);

ReactDOM.render(App(), document.querySelector('#app'));
