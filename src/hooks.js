import React, {useState, useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = useCallback(() => setCount(prevState => prevState - 1), [
    setCount,
  ]);
  useEffect(() => {
    console.log('call effect');
  }, [increment]); // decrement にすると、effect は呼ばれない。キャッシュしている decrement を使い回しているため
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
