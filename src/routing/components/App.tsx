import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Memo from './Memo';
import Profile from './Profile';

const App = () => (
  <BrowserRouter>
    <>
      <Header />
      <Route exact path="/routing" component={Home} />
      <Route path="/routing/memo" component={Memo} />
      <Route path="/routing/profile" component={Profile} />
    </>
  </BrowserRouter>
);
export default App;
