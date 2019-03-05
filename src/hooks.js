import React, {useState} from 'react';
import ReactDOM from 'react-dom';

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

const App = () => {
  const [favoriteFruit, setFavoriteFruit] = useState(null);
  const onChange = e => {
    setFavoriteFruit(fruitList.filter(f => f.label === e.target.value)[0]);
  };
  return (
    <>
      {favoriteFruit && <div>{`I like ${favoriteFruit.label}.`}</div>}
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
