import {authorization} from './authorization';
import {AuthorizationStatus} from '../../const';
import {ActionType} from '../action';

const userData = {
  'avatar_url': 'img/1.png',
  email: 'Oliver.conner@gmail.com',
  id: 1,
  'is_pro': true,
  name: 'Oliver.conner',
  token: 'nbfA8gWdfiOqwEfd2s',
};

describe('Reducer: authorization', () => {
  it('without additional parameters should return initial state', () => {
    expect(authorization(undefined, {})).toEqual({
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      userData: {},
    });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      userData: {},
    };
    const requireAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(authorization(state, requireAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        userData: {},
      });
  });

  it('should update user data by sending user data', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: {},
    };
    const setUserDataAction = {
      type: ActionType.SET_USER_DATA,
      payload: userData,
    };

    expect(authorization(state, setUserDataAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        userData: userData,
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: {},
    };
    const setLogOutAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(authorization(state, setLogOutAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userData: {},
      });
  });
});
