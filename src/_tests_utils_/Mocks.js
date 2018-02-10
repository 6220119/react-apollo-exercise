import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const singletonAuthInstance = {
  signOut() {},
  signIn() {},
  isSignedIn: {
    listen(){},
    get() {
      return true;
    }
  }
};

const gapiMock = (function () {
  var gapi = {};

  return {
    auth2: {
      getAuthInstance() {
        return singletonAuthInstance;
      }
    },
    client: {
      init() {
        return {
          then(callbackFn) {
            callbackFn();
          }
        }
      }
    },
    load(clientType, callbackFn) {
      callbackFn();
    },
  };

})();

Object.defineProperty(window, 'gapi', {
  value: gapiMock
});

export default {
  mockDataService() {
    return {
      setExternalCallbackFn(getProfileCallback, promiseCallback, getAllProfileCallback) {
        this.getProfileCallback = getProfileCallback;
        this.promiseCallback = promiseCallback;
        this.getAllProfileCallback = getAllProfileCallback;
      },
      getAllProfiles() {
        return {
          then: (successCallback) => {
            if(this.getAllProfileCallback) {
              successCallback(this.getAllProfileCallback());
            }
          }
        }
      },
      getProfile(input) {
        if(this.getProfileCallback) {
          this.getProfileCallback(input);
        }
        return {
          then: (callbackFn) => {
            if(this.promiseCallback) {
              this.promiseCallback(callbackFn);
            }
          }
        }
      }
    };
  }
};