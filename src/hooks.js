import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count is {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.querySelector('#app'));
