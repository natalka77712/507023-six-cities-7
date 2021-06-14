import React from 'react';
import PropTypes from 'prop-types';
import Card from "../card/card";
import cardProp from '../card/card.prop';
import Footer from "../footer/footer";

const Favorites = ({offers}) => {

  const favouriteList = [];

  offers.forEach((place) => {
    if (place.isFavorite) {
      favouriteList.push(place);
    }
  });

  return (
    <>
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
                    favouriteList.map((offer) => {
                      return (
                        <Card
                          offer={offer}
                          key={offer.id}
                        />
                      );
                    })
                  }
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default Favorites;

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
};
