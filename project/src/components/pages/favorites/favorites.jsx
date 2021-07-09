import React from 'react';
import Footer from '../../footer/footer';
import FavoriteCard from './favorite-card/favorite-card';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cardProp from '../../card/card.prop';
import {AuthorizationStatus, Path} from '../../../const';
import {Link} from 'react-router-dom';
import {Login} from '../../login/login';
import LogOut from '../../log-out/log-out';

function Favorites ({offers, authorizationStatus}) {

  const favouriteList = [];

  offers.forEach((place) => {
    if (place.isFavorite) {
      favouriteList.push(place);
    }
  });

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={Path.MAIN}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            {authorizationStatus === AuthorizationStatus.AUTH ? <Login /> : <LogOut />}
          </div>
        </div>
      </header>
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
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offers:state.offers,
  authorizationStatus: state.authorizationStatus,
});


export {Favorites};

export default connect(mapStateToProps, null)(Favorites);

