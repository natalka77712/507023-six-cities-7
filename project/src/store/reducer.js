import {INITIAL_CITY} from '../const';
import {ActionType} from './action';
import {offers} from '../mocks/offers';
import {filterOffers} from '../utils';


const initialState = {
  offers,
  city: INITIAL_CITY,
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
    default:
      return state;
  }
};

export {reducer};
