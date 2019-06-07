import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import assert from 'assert';

import Home from '../Home';

describe('Home', (): void => {
  it('テキストは Home', (): void => {
    const wrapper: ShallowWrapper = shallow(<Home />).find(
      '[data-test="text"]'
    );
    assert.equal('This page is home.', wrapper.text());
  });
});
