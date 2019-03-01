import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>count is {state}</p>
      <button type="button" onClick={() => dispatch({type: 'INCREMENT'})}>
        ++
      </button>
      <button type="button" onClick={() => dispatch({type: 'DECREMENT'})}>
        --
      </button>
    </div>
  );
};

ReactDOM.render(<Counter />, document.querySelector('#app'));
