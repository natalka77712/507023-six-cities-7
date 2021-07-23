export const MAX_STARS_AMOUNT = 5;

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

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

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
  FAVORITES: '/favorite',
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

export const FavoritesButtonTypes = {
  CARD: {
    buttonClassName: 'place-card',
    imgWidth: '18',
    imgHeight: '19',
  },
  ROOM_PAGE: {
    buttonClassName: 'property',
    imgWidth: '31',
    imgHeight: '33',
  },
};

export const Types = {
  MAIN_PAGE: 'MAIN_PAGE',
  FAVORITES_PAGE: 'FAVORITES_PAGE',
  ROOM_PAGE: 'ROOM_PAGE',
  CARD: 'CARD',
};

export const PageType = {
  MAIN: 'cities__places-list tabs__content',
  ROOM: 'near-places__list',
  FAVORITE: {
    article: 'favorites__card',
    img: 'favorites__image-wrapper',
    cardInfo: 'favorites__card-info',
    height: '110',
    width: '150',
  },
};
