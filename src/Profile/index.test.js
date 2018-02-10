import React from 'react';
import ReactDOM from 'react-dom';
import '../_tests_utils_/Mocks';

import Profile from '.';
import { shallow } from 'enzyme';

it('renders Profile correctly', () => {
  const fullname = 'fullnameABC';
  const title = 'titleABC';
  const company = 'companyABC';
  const url = 'urlABC';
  const expectedResult = [fullname, title, company, url];

  const wrapper = shallow(<Profile fullname={fullname} title={title} company={company} url={url} />);
  for (let i = 0; i < 4; ++i) {
    expect(wrapper.find('dt').at(i).text()).toContain(expectedResult[i]);
  }
});
