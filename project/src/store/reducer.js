import {AuthorizationStatus, INITIAL_CITY, SortType} from '../const';
import {ActionType} from './action';
// import {offers} from '../mocks/offers';

const initialState = {
  city: INITIAL_CITY,
  offers: [],
  isOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  activeSort: SortType.POPULAR,
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
        authorizationStatus: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
