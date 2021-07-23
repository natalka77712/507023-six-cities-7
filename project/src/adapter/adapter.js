export const adaptOffersToClient = (offer) => {

  const adaptedOffer = {
    ...offer,
    imgPreview: offer.preview_image,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
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
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
};

export const adaptUserToClient = (userData) => {
  const adaptedUser = {
    ...userData,
    avatarUrl: userData.avatar_url,
    isPro: userData.is_pro,
  };

  delete adaptedUser.token;
  delete adaptedUser.avatar_url;
  delete adaptedUser.is_pro;

  return adaptedUser;
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
