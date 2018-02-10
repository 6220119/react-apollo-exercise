import React from 'react';
import ReactDOM from 'react-dom';
import '../_tests_utils_/Mocks';

import ProfileList from '.';
import { shallow } from 'enzyme';

it('renders ProfileList correctly', () => {
  const profiles = [
    {
      id: 1,
      fullname: 'AAA'
    },
    {
      id: 2,
      fullname: 'BBB'
    }
  ];

  const onSelected = (obj) => {
    expect(obj.id).toEqual(1);
  };

  const wrapper = shallow(<ProfileList profiles={profiles} onSelected={onSelected}/>);
  expect(wrapper.find('a[role="button"]').length).toBe(2);
  expect(wrapper.find('a[role="button"]').at(0).text()).toBe('AAA');
  expect(wrapper.find('a[role="button"]').at(1).text()).toBe('BBB');

  wrapper.find('a[role="button"]').at(0).simulate('click');
});
