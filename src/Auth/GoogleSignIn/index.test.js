import Mocks from '../../_tests_utils_/Mocks';
import GoogleSignIn from '.';

it('I think this is just a test to increase coverage, not very useful here [-_- ]', () => {
  const spyLoad = jest.spyOn(window.gapi, 'load');
  GoogleSignIn.init(() => {});
  expect(spyLoad).toHaveBeenCalled();
  
  const spySignIn = jest.spyOn(window.gapi.auth2.getAuthInstance(), 'signIn');
  GoogleSignIn.signIn();
  expect(spySignIn).toHaveBeenCalled();
  
  const spySignOut = jest.spyOn(window.gapi.auth2.getAuthInstance(), 'signOut');
  GoogleSignIn.signOut();
  expect(spySignOut).toHaveBeenCalled();
});