import React from 'react';
import {Route} from 'react-router-dom';

const Memo = () => (
  <>
    Memo
    <Route path="/memo/hoge" render={() => <div>Hoge</div>} />
  </>
);
export default Memo;
