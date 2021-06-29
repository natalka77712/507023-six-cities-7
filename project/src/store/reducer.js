import {AuthorizationStatus, INITIAL_CITY, SortType} from '../const';
import {ActionType} from './action';
// import {offers} from '../mocks/offers';
import {filterOffers} from '../utils';

const initialState = {
  city: INITIAL_CITY,
  offers: [],
  isOffersLoaded: false,
  nearOffers: [],
  isNearOffersLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  activeOffer: false,
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
        offers: filterOffers(state.city, initialState.offers),
      };
    // case ActionType.SET_SORT:
    //   return {
    //     ...state,
    //     offers: setSorting([...state.offers], action.payload),
    //   };
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
    case ActionType.FETCH_NEAR_OFFERS:
      return {
        ...state,
        nearOffers: action.payload,
        isNearOffersLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
