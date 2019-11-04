import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';

import Header from './Header';
import Home from './Home';
import Memo from './Memo';
import Profile from './Profile';

const App: () => React.ReactElement = () => (
  <BrowserRouter>
    <>
      <Header />
      <Route exact path="/routing">
        <Home />
      </Route>
      <Route path="/routing/memo">
        <Memo />
      </Route>
      <Route path="/routing/profile">
        <Profile />
      </Route>
    </>
  </BrowserRouter>
);
export default hot(App);
