export const ActionType = {
  CHANGE_CITY: 'cities/CHANGE_CITY',
  FILTERED_OFFERS: 'cities/FILTERED_OFFERS',
  SET_SORT: 'cities/SET_SORT',
  FETCH_OFFERS: 'cities/fetchOffers',
  FETCH_ROOM: 'cities/fetchRoom',
  FETCH_OFFERS_NEARBY: 'cities/fetchOffersNearby',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  LOGIN: 'user/login',
  FETCH_REVIEWS: 'user/fetchReviews',
  REDIRECT_TO_ROUTE: 'redirect/redirectToRoute',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  filteredOffers: (city) => ({
    type: ActionType.FILTERED_OFFERS,
    payload: city,
  }),
  setSort: (sort) => ({
    type: ActionType.SET_SORT,
    payload: sort,
  }),
  fetchOffers: (offers) => ({
    type: ActionType.FETCH_OFFERS,
    payload: offers,
  }),
  fetchRoom: (room) => ({
    type: ActionType.FETCH_ROOM,
    payload: room,
  }),
  fetchOffersNearby: (offersNearby) => ({
    type: ActionType.FETCH_OFFERS_NEARBY,
    payload: offersNearby,
  }),
  requireAuthorization: (payload) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload,
  }),
  login: (email) => ({
    type: ActionType.LOGIN,
    payload: email,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  fetchReviews: (reviews) => ({
    type: ActionType.FETCH_REVIEWS,
    payload: reviews,
  }),
};
