import React, {useState, useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(prevState => prevState + 1), [
    setCount,
  ]);
  const decrement = useCallback(() => setCount(prevState => prevState - 1), [
    setCount,
  ]);
  useEffect(() => {
    console.log('call effect');
  }, [count]); // 空の配列にすると、マウント時にのみ実行されるようになる
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
