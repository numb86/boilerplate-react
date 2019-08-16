import React, {useReducer} from 'react';
import {hot} from 'react-hot-loader/root';

import SelectBox from './SelectBox';

interface Fruit {
  id: number;
  label: string;
}

const mockApi = (value: number): Promise<number> => Promise.resolve(value);

const fruitList = [
  {id: 1, label: 'Banana'},
  {id: 2, label: 'Apple'},
  {id: 3, label: 'Orange'},
];

const App = ({reducer, initialState}: any): React.ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onSelectFruit = (e: React.FormEvent<HTMLSelectElement>): void => {
    const seletedFruit = fruitList.filter(
      (f: Fruit): boolean => f.label === e.currentTarget.value
    )[0];
    dispatch({type: 'UPDATE_FAVORITE_FRUIT', favoriteFruit: seletedFruit});
  };
  const increment = async (value: number): Promise<void> => {
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

      <button type="button" onClick={(): Promise<void> => increment(1)}>
        +1
      </button>

      <SelectBox
        list={fruitList.map((f: Fruit): string => f.label)}
        selectedItem={favoriteFruit ? favoriteFruit.label : null}
        onChange={onSelectFruit}
        initialMessage="select favorite fruit"
      />

      <br />

      <input
        type="text"
        value={screenName}
        onChange={(e: React.FormEvent<HTMLInputElement>): void => {
          dispatch({
            type: 'ENTER_SCREEN_NAME',
            screenName: e.currentTarget.value,
          });
        }}
        placeholder="Enter your name"
        maxLength={5}
      />

      <br />

      <input
        type="password"
        value={message}
        onChange={(e: React.FormEvent<HTMLInputElement>): void => {
          dispatch({
            type: 'ENTER_MESSAGE',
            message: e.currentTarget.value,
          });
        }}
        placeholder="Enter message"
      />
    </>
  );
};
export default hot(App);
