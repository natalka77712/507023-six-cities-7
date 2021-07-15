import {AuthorizationStatus, INITIAL_CITY, SortType} from '../const';
import {ActionType} from './action';

const initialState = {
  city: INITIAL_CITY,
  offers: [],
  offersNearby: [],
  reviews: [],
  room: {},
  isDataLoaded: false,
  isRoomDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  activeSort: SortType.POPULAR,
  userData: {},
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
    case ActionType.FETCH_ROOM:
      return {
        ...state,
        room: action.payload,
        isRoomDataLoaded: true,
      };
    case ActionType.FETCH_OFFERS_NEARBY:
      return {
        ...state,
        offersNearby: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGIN:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.AUTH,
        userData: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.FETCH_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};

