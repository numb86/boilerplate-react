import React from 'react';
import {Route} from 'react-router-dom';

const Memo: () => React.ReactElement = () => (
  <>
    Memo
    <Route
      path="/routing/memo/hoge"
      render={(): React.ReactElement => <div>Hoge</div>}
    />
  </>
);
export default Memo;
