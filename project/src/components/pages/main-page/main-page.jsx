import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Map from '../../map/map';
import {AuthorizationStatus, Path, PlacesListType} from '../../../const';
import NearPlacesList from '../../near-places-list/near-places-list';
import CityList from '../../city-list/city-list';
import {connect} from 'react-redux';
import PlacesSorting from '../../places-sorting/places-sorting';
import {filterOffers, setSorting} from '../../../utils';
import Login from '../../login/login';

import {Link} from 'react-router-dom';
import LogOut from '../../log-out/log-out';


function MainPage ({offers, city, authorizationStatus}) {
  const [activeCard, setActiveCard] = useState(null);

  const cityCoords = offers[0].city.location;

  return (
    <div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={Path.MAIN}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </Link>
              </div>
              {authorizationStatus === AuthorizationStatus.AUTH ? <Login/> : <LogOut/>}
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} aces to stay in {city}</b>
                <PlacesSorting/>
                <NearPlacesList offers ={offers} setActiveCard={setActiveCard} type={PlacesListType.MAIN_PAGE}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map activeCard={activeCard} initialPosition={cityCoords}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offers: setSorting(filterOffers(state.city, state.offers), state.activeSort),
  city: state.city,
  authorizationStatus: state.authorizationStatus,
});


export {MainPage};

export default connect(mapStateToProps, null)(MainPage);
