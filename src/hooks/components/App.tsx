import React, {useReducer} from 'react';

import SelectBox from './SelectBox';
import TextBox from './TextBox';

const mockApi = (value: any) => Promise.resolve(value);

const fruitList = [
  {id: 1, label: 'Banana'},
  {id: 2, label: 'Apple'},
  {id: 3, label: 'Orange'},
];

const App = ({reducer, initialState}: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onSelectFruit = (e: any) => {
    const seletedFruit = fruitList.filter(f => f.label === e.target.value)[0];
    dispatch({type: 'UPDATE_FAVORITE_FRUIT', favoriteFruit: seletedFruit});
  };
  const increment = async (value: any) => {
    const res = await mockApi(value);
    dispatch({type: 'INCREMENT', incrementValue: res});
  };

  const {favoriteFruit, count, screenName, message}: any = state;
  return (
    <>
      <div>
        {`name: ${screenName}`}
        <br />
        {`message: ${message}`}
        <br />
        {`Count is ${count}.`}{' '}
        {favoriteFruit && `I like ${favoriteFruit.label}.`}
      </div>

      <button type="button" onClick={() => increment(1)}>
        +1
      </button>

      <SelectBox
        list={fruitList.map(f => f.label)}
        selectedItem={favoriteFruit ? favoriteFruit.label : null}
        onChange={onSelectFruit}
        initialMessage="select favorite fruit"
      />

      <br />

      <TextBox
        type="text"
        value={screenName}
        onChange={(e: any) => {
          dispatch({
            type: 'ENTER_SCREEN_NAME',
            screenName: e.target.value,
          });
        }}
        placeHolder="Enter your name"
        maxLength="5"
      />

      <br />

      <TextBox
        type="password"
        value={message}
        onChange={(e: any) => {
          dispatch({
            type: 'ENTER_MESSAGE',
            message: e.target.value,
          });
        }}
        placeHolder="Enter message"
      />
    </>
  );
};
export default App;
