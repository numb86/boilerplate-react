import React, {useReducer} from 'react';

import SelectBox from './SelectBox';

const mockApi = value => Promise.resolve(value);

const fruitList = [
  {id: 1, label: 'Banana'},
  {id: 2, label: 'Apple'},
  {id: 3, label: 'Orange'},
];

const App = ({reducer, initialState}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = e => {
    const seletedFruit = fruitList.filter(f => f.label === e.target.value)[0];
    dispatch({type: 'UPDATE_FAVORITE_FRUIT', favoriteFruit: seletedFruit});
  };
  const increment = async value => {
    const res = await mockApi(value);
    dispatch({type: 'INCREMENT', incrementValue: res});
  };

  const {favoriteFruit, count} = state;
  return (
    <>
      <div>
        {`Count is ${count}.`}{' '}
        {favoriteFruit && `I like ${favoriteFruit.label}.`}
      </div>
      <button type="button" onClick={() => increment(1)}>
        +1
      </button>
      <SelectBox
        list={fruitList.map(f => f.label)}
        selectedItem={favoriteFruit ? favoriteFruit.label : null}
        onChange={onChange}
        initialMessage="select favorite fruit"
      />
    </>
  );
};
export default App;
