import React from 'react';
import ReactDOM from 'react-dom';
import Mocks from '../_tests_utils_/Mocks';

import RenderProfile from './RenderProfile';
import { shallow } from 'enzyme';

it('should pass null to callback when clicked on Go Back', () => {
  const ds = Mocks.mockDataService();
  const onSelected = (value) => {
    expect(value).toBeNull();
  };
  const wrapper = shallow(<RenderProfile id={100} service={ds} onSelected={onSelected} />);
  wrapper.find('a[role="button"]').simulate('click');
});

it('renders RenderProfile correctly before having data', () => {
  const ds = Mocks.mockDataService();
  ds.setExternalCallbackFn(function getProfileCallback(input) {
    expect(input).toBe(100)
  });
  const wrapper = shallow(<RenderProfile id={100} service={ds} />);
  expect(wrapper.find('p').text()).toContain('Loading');
});

it('renders RenderProfile correctly after having data', () => {
  const ds = Mocks.mockDataService();
  ds.setExternalCallbackFn(function getProfileCallback(input) {
    expect(input).toBe(100)
  },function promiseCallback(callbackFn) {
    callbackFn({
      data: {
        profile: {
          fullname: 'abc',
          company: 'abc',
          title: 'abc',
          url: 'abc'
        }
      }
    })
  });
  const wrapper = shallow(<RenderProfile id={100} service={ds} />);
  expect(wrapper.instance().state.fullname).toEqual('abc')
  expect(wrapper.instance().state.company).toEqual('abc')
  expect(wrapper.instance().state.title).toEqual('abc')
  expect(wrapper.instance().state.url).toEqual('abc')
});
