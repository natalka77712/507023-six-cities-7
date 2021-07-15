export const Path = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
  ERROR: '/404',
};

export const PinSettings = {
  DEFAULT_IMG: 'img/pin.svg',
  ACTIVE_IMG: 'img/pin-active.svg',
};

export const PlacesListType = {
  MAIN_PAGE: 'main',
  ROOM_PAGE: 'room-page',
};

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const INITIAL_CITY = CITIES[0];

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  RATING_HIGH: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
  NEARBY: '/nearby',
  REVIEWS: '/comments',
};

export const Ratings = {
  PERFECT: {
    value: 5,
    title: 'perfect',
  },
  GOOD: {
    value: 4,
    title: 'good',
  },
  NOT_BAD: {
    value: 3,
    title: 'not bad',
  },
  BADLY: {
    value: 2,
    title: 'badly',
  },
  TERRIBLY: {
    value: 1,
    title: 'terribly',
  },
};
