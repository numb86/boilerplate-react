import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';

const mockApi = value => Promise.resolve(value);

const fruitList = [
  {id: 1, label: 'Banana'},
  {id: 2, label: 'Apple'},
  {id: 3, label: 'Orange'},
];

const Select = ({list, selectedItem, onChange, initialMessage = ''}) => (
  <select value={selectedItem || initialMessage} onChange={onChange}>
    {!selectedItem && (
      <option disabled value={initialMessage}>
        {initialMessage}
      </option>
    )}
    {list &&
      list.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
  </select>
);

const reducer = (state, action) => {
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

const App = () => {
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
      <Select
        list={fruitList.map(f => f.label)}
        selectedItem={favoriteFruit ? favoriteFruit.label : null}
        onChange={onChange}
        initialMessage="select favorite fruit"
      />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
