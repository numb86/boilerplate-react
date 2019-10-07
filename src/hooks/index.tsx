import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

declare const module: any;

const reducer = (state: any, action: any): {} => {
  const actionValues = Object.values(action);
  actionValues.forEach((v): void => {
    if (v instanceof Promise)
      throw new Error('Action does not allow Promise Object.');
  });

  const {type, favoriteFruit, incrementValue, screenName, message} = action;
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
    case 'ENTER_SCREEN_NAME':
      return {
        ...state,
        screenName,
      };
    case 'ENTER_MESSAGE':
      return {
        ...state,
        message,
      };
    default:
      return state;
  }
};

const initialState = {
  favoriteFruit: null,
  count: 0,
  screenName: '',
  message: '',
};

ReactDOM.render(
  <App reducer={reducer} initialState={initialState} />,
  document.querySelector('#app')
);
