import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import cardProp from '../card/card.prop';
import Card from '../card/card';
import PropTypes from 'prop-types';

function Favorites(props) {
  const {offers} = props;

  const favoritePlaces = [];

  offers.forEach((offer) => {
    if (offer.isFavorite) {
      favoritePlaces.push(offer);
    }
  });

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/some/valid/uri">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {
                    favoritePlaces.map((offer) => <Card offer={offer} key={offer.id} />,
                    )
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
};
