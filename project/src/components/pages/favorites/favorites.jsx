import React from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import FavoriteCard from './favorite-card/favorite-card';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cardProp from '../../card/card.prop';

function Favorites ({offers}) {

  const favouriteList = [];

  offers.forEach((place) => {
    if (place.isFavorite) {
      favouriteList.push(place);
    }
  });

  return (
    <>
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
                    favouriteList.map((offer) => <FavoriteCard offer={offer}  key={offer.id} />,
                    )
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
}

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  offers:state.offers,
});


export {Favorites};

export default connect(mapStateToProps, null)(Favorites);

