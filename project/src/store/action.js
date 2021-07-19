import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'cities/CHANGE_CITY',
  FILTERED_OFFERS: 'cities/FILTERED_OFFERS',
  SET_SORT: 'cities/SET_SORT',
  LOAD_OFFERS: 'cities/loadOffers',
  LOAD_ROOM: 'cities/loadRoom',
  LOAD_OFFERS_NEARBY: 'cities/loadOffersNearby',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  SET_LOG_OUT: 'user/setLogOut',
  SET_USER_DATA: 'user/setUserData',
  LOAD_REVIEWS: 'user/loadReviews',
  REDIRECT_TO_ROUTE: 'redirect/redirectToRoute',
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

