import React from 'react';
import {Route} from 'react-router-dom';

const Memo = () => (
  <>
    Memo
    <Route path="/routing/memo/hoge" render={() => <div>Hoge</div>} />
  </>
);
export default Memo;
