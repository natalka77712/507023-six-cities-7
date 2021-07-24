import {createReducer} from '@reduxjs/toolkit';
import {
  filteredOffers, loadErrorMessage, loadFavoritesOffers,
  loadOffers,
  loadOffersNearby,
  loadReviews,
  loadRoom, updateOffer
} from '../action';
import {updateFavoritesOffers, updateOfferIsFavorite, updateOffers} from '../../utils';

const initialState = {
  offers: [],
  offersNearby: [],
  room: {},
  reviews: [],
  favoritesOffers: [],
  isDataLoaded: false,
  isRoomDataLoaded: false,
  isFavoritesLoaded: false,
  errorMessage: '',
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
    })
    .addCase(loadFavoritesOffers, (state, action) => {
      state.favoritesOffers = action.payload;
      state.isFavoritesLoaded = true;
    })
    .addCase(updateOffer, (state, action) => {
      state.room = updateOfferIsFavorite(state.room, action.payload);
      state.offers = updateOffers(state.offers, action.payload);
      state.favoritesOffers = updateFavoritesOffers(state.favoritesOffers, action.payload);
      state.offersNearby = updateOffers(state.offersNearby, action.payload);
    })
    .addCase(loadErrorMessage, (state, action) => {
      state.errorMessage = String(action.payload);
    });
});

export {data};
