import React from 'react';
import {useRouteMatch} from 'react-router-dom';

const Memo: () => React.ReactElement = () => {
  const match = useRouteMatch({
    path: '/routing/memo/hoge',
  });

  return (
    <>
      Memo
      {match && <div>Hoge</div>}
    </>
  );
};
export default Memo;
