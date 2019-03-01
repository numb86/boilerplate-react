import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';

const myContext = createContext({id: 1, name: 'Alice'});

const User = () => {
  const user = useContext(myContext);
  return (
    <div>
      id: {user.id}
      <br />
      name: {user.name}
    </div>
  );
};

ReactDOM.render(<User />, document.querySelector('#app'));
