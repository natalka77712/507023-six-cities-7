import React from 'react';
import PropTypes from 'prop-types';
import FavoritesPlace from '../favorites-place/favorites-place';
import cardProp from '../card/card.prop';

function FavoritesList({favoritesOffers, favoritesCities}) {
  return (
    <ul className="favorites__list">
      {favoritesCities.map((city) => (
        <FavoritesPlace
          key={city}
          favoritesOffers={favoritesOffers}
          favoritesCity={city}
        />
      ))};
    </ul>
  );
}

FavoritesList.propTypes = {
  favoritesOffers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FavoritesList;
