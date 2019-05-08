import React from 'react';
import {shallow} from 'enzyme';

import Home from '../Home.tsx';

const assert = require('assert');

describe('Home', () => {
  it('テキストは Home', () => {
    const wrapper = shallow(<Home />).find('[data-test="text"]');
    assert.equal('This page is home.', wrapper.text());
  });
});
