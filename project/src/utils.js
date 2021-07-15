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

export const adaptOffersToClient = (offer) => {

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

export const adaptUserToClient = (userInfo) => {
  const adaptedUserInfo = {
    ...userInfo,
    avatarUrl: userInfo.avatar_url,
    isPro: userInfo.is_pro,
  };

  delete adaptedUserInfo.avatar_url;
  delete adaptedUserInfo.is_pro;

  return adaptedUserInfo;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = {
    ...review,
    user: {
      ...review.user,
      avatarUrl: review.user.avatar_url,
      isPro: review.user.is_pro,
    },
  };

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

