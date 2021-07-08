export const ActionType = {
  CHANGE_CITY: 'cities/CHANGE_CITY',
  FILTERED_OFFERS: 'cities/FILTERED_OFFERS',
  SET_SORT: 'cities/SET_SORT',
  FETCH_OFFERS: 'cities/fetchOffers',
  FETCH_NEAR_OFFERS: 'cities/fetchNearOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  LOGIN: 'user/login',
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
};
