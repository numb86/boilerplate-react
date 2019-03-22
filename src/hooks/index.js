import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const reducer = (state, action) => {
  const actionValues = Object.values(action);
  actionValues.forEach(v => {
    if (v instanceof Promise)
      throw new Error('Action does not allow Promise Object.');
  });

  const {type, favoriteFruit, incrementValue} = action;
  switch (type) {
    case 'UPDATE_FAVORITE_FRUIT':
      return {
        ...state,
        favoriteFruit,
      };
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + incrementValue,
      };
    default:
      return state;
  }
};

const initialState = {
  favoriteFruit: null,
  count: 0,
};

ReactDOM.render(
  <App reducer={reducer} initialState={initialState} />,
  document.querySelector('#app')
);
