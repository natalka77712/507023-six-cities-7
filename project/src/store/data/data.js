import {createReducer} from '@reduxjs/toolkit';
import {filteredOffers, loadOffers, loadOffersNearby, loadReviews, loadRoom} from '../action';

const initialState = {
  offers: [],
  offersNearby: [],
  room: {},
  reviews: [],
  isDataLoaded: false,
  isRoomDataLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadRoom, (state, action) => {
      state.isRoomDataLoaded = true;
      state.room = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.isDataLoaded = true;
      state.reviews = action.payload;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(filteredOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {data};
