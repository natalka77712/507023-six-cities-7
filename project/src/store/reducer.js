import {AuthorizationStatus, INITIAL_CITY, SortType} from '../const';
import {ActionType} from './action';

const initialState = {
  city: INITIAL_CITY,
  offers: [],
  isOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  activeSort: SortType.POPULAR,
  userEmail: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILTERED_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionType.SET_SORT:
      return {
        ...state,
        activeSort: action.payload,
      };
    case ActionType.FETCH_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isOffersLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload.status,
      };
    case ActionType.LOGIN:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: null,
      };
    default:
      return state;
  }
};

export {reducer};

