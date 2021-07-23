import {SortType} from './const';

const MAX_STARS_AMOUNT = 5;

export const formatDate = (date) => {
  const reviewDate = new Date(date);

  return reviewDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
};

export const countRating = (rate) => `${rate / MAX_STARS_AMOUNT * 100}%`;

export const filterOffers = (city, offers) => (
  offers.filter((offer) => offer.city.name === city)
);

export const setSorting = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW:
      return offers.sort((a,b) => (a.price - b.price));
    case SortType.PRICE_HIGH:
      return offers.sort((a, b) => (b.price - a.price));
    case SortType.RATING_HIGH:
      return offers.sort((a,b) => (b.rating - a.rating));
    default:
      return offers;
  }
};

export const sortDateComments = (a, b) => (
  Date.parse(b.date) - Date.parse(a.date)
);

export const updateOffers = (offers, payload) => {
  if (offers.some((offer) => offer.id === payload.id)) {
    offers.find((offer) => offer.id === payload.id)
      .isFavorite = payload.isFavorite;
  }
  return offers;
};

export const updateOfferIsFavorite = (offer, payload) => {
  if (offer.id === payload.id) {
    offer.isFavorite = payload.isFavorite;
  }
  return offer;
};

export const updateFavoritesOffers = (offers, payload) => {
  if (payload.isFavorite) {
    return [...offers, payload];
  }
  return offers.filter((offer) => offer.id !== payload.id);
};

