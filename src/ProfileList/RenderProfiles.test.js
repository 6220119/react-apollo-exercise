import React from 'react';
import ReactDOM from 'react-dom';
import Mocks from '../_tests_utils_/Mocks';

import RenderProfiles from './RenderProfiles';
import { shallow } from 'enzyme';

it('renders RenderProfiles correctly before having data', () => {
  const ds = Mocks.mockDataService();
  const noop = () => {};
  const wrapper = shallow(<RenderProfiles id={100} service={ds} />);
  expect(wrapper.find('p').text()).toContain('Loading');
});


it('renders RenderProfiles correctly after having data', () => {
  const ds = Mocks.mockDataService();
  const noop = () => {};
  ds.setExternalCallbackFn(noop, noop, function getAllProfiles() {
    return {
      data: {
        profiles: [
          {
            id: 1,
            fullname: 'AAA'
          },
          {
            id: 2,
            fullname: 'BBB'
          }]
      }
    }
  });
  const wrapper = shallow(<RenderProfiles id={100} service={ds} />);
  expect(wrapper.instance().state.profiles.length).toEqual(2);
});
