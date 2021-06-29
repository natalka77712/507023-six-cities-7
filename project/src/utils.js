import {offers} from './mocks/offers';
import {AuthorizationStatus, SortType} from './const';

const MAX_STARS_AMOUNT = 5;


export const formatDate = (date) => {
  const reviewDate = new Date(date);

  return reviewDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
};

export const countRating = (rate) => `${rate / MAX_STARS_AMOUNT * 100}%`;

export const  getShuffledArray = (array) => {
  const result = [], source = array.concat([]);

  while (source.length) {
    const index = Math.floor(Math.random() * source.length);
    result.push(source[index]);
    source.splice(index, 1);
  }
  return result;
};

export const nearPlaces = getShuffledArray(offers).slice(1);

export const filterOffers = (city, places) => (
  places.filter((offer) => offer.city.name === city)
);

export const setSorting = (offer, sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW:
      return offer.sort((a,b) => (a.price - b.price));
    case SortType.PRICE_HIGH:
      return offer.sort((a, b) => (b.price - a.price));
    case SortType.RATING_HIGH:
      return offer.sort((a,b) => (b.rating - a.rating));
    default:
      return offer;
  }
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export const adaptToClient = (offer) => {

  const adaptedOffer = {
    ...offer,
    imgPreview: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    bedrooms: offer.bedrooms,
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
  };

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.bedrooms;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
};
