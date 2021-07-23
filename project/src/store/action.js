import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'operation/CHANGE_CITY',
  FILTERED_OFFERS: 'operation/FILTERED_OFFERS',
  SET_SORT: 'operation/SET_SORT',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_ROOM: 'data/loadRoom',
  LOAD_OFFERS_NEARBY: 'data/loadOffersNearby',
  REQUIRED_AUTHORIZATION: 'authorization/requiredAuthorization',
  SET_LOG_OUT: 'authorization/setLogOut',
  SET_USER_DATA: 'authorization/setUserData',
  LOAD_REVIEWS: 'data/loadReviews',
  REDIRECT_TO_ROUTE: 'redirect/redirectToRoute',
  LOAD_FAVORITES_OFFERS: 'data/loadFavoritesOffers',
  UPDATE_OFFER: 'data/updateOffer',
};

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (payload) => ({
  payload,
}));

export const setUserData = createAction(ActionType.SET_USER_DATA, (userData) => ({
  payload: userData,
}));

export const setLogOut = createAction(ActionType.SET_LOG_OUT);

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offersNearby) => ({
  payload: offersNearby,
}));

export const loadRoom = createAction(ActionType.LOAD_ROOM, (room) => ({
  payload: room,
}));

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const filteredOffers = createAction(ActionType.FILTERED_OFFERS, (city) => ({
  payload: city,
}));

export const setSort = createAction(ActionType.SET_SORT, (sort) => ({
  payload: sort,
}));

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const loadFavoritesOffers = createAction(ActionType.LOAD_FAVORITES_OFFERS, (favoritesOffers) => ({
  payload: favoritesOffers,
}));

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (offer) => ({
  payload: offer,
}));
