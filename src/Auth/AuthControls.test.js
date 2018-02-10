import React from 'react';
import ReactDOM from 'react-dom';
import Mocks from '../_tests_utils_/Mocks';

import AuthControls from './AuthControls';
import { shallow } from 'enzyme';

it('renders AuthControls correctly', () => {
  let loggedIn = null;
  const mockAuthHandler = {
    init() {

    },
    signOut() {
      loggedIn = false;
    }
  };

  const wrapper = shallow(<AuthControls authHandler={mockAuthHandler} onSignedInChanged={() => {}}/>);
  // Expect G-SignIn button displayed when you are not signed in.
  expect(wrapper.find('.g-signin2').getElement().props.style.display).toEqual('block');
  wrapper.instance().signedInChanged(true);
  wrapper.update();
  // Sign out button should appear now
  expect(wrapper.find('button').text()).toEqual('Sign Out');
  wrapper.find('button').simulate('click');
  expect(loggedIn).toBe(false);
});