import React from 'react';
import ReactDOM from 'react-dom';
import './_tests_utils_/Mocks';
import App from './App';
import AuthControls from './Auth/AuthControls'

import { shallow } from 'enzyme';

it('renders AuthControls', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('AuthControls').length).toEqual(1);
})

it('renders Profiles after login', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().signedInChanged(true);
  wrapper.update();
  expect(wrapper.find('RenderProfiles').length).toEqual(1);
})

it('renders Profile when there is an object selected', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().signedInChanged(true);
  wrapper.instance().selectedObjectChange({});
  wrapper.update();
  expect(wrapper.find('RenderProfile').length).toEqual(1);
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
