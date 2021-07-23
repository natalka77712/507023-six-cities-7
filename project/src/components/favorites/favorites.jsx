import React from 'react';
import PropTypes from 'prop-types';
import FavoritesList from '../favorites-list/favorites-list';
import cardProp from '../card/card.prop';

function Favorites({favoritesOffers, favoritesCities}) {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList
            favoritesOffers={favoritesOffers}
            favoritesCities={favoritesCities}
          />
        </section>
      </div>
    </main>
  );
}

Favorites.propTypes = {
  favoritesOffers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  favoritesCities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Favorites;
