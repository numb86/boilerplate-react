import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(prevState => prevState + 1), [
    setCount,
  ]);
  const decrement = useCallback(() => setCount(prevState => prevState - 1), [
    setCount,
  ]);
  return (
    <div>
      <p>count is {count}</p>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.querySelector('#app'));
