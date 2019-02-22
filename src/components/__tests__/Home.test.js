import React from 'react';
import {shallow} from 'enzyme';

import Home from '../Home';

const assert = require('assert');

describe('Home', () => {
  it('テキストは Home', () => {
    const wrapper = shallow(<Home />);
    assert.equal('Home', wrapper.text());
  });
});
