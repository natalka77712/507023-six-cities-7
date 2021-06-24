import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import cardProp from '../../card/card.prop';
import Map from '../../map/map';
import {PlacesListType} from '../../../const';
import NearPlacesList from '../../near-places-list/near-places-list';
import CityList from '../../city-list/city-list';
import {ActionCreator} from '../../../store/action';
import {connect} from 'react-redux';

function Main ({ offers, city, onCitySelect}) {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() =>{
    onCitySelect(city);
  }, [onCitySelect, city]);

  return (
    <div>
      <div className="page page--gray page--main">
        <Header/>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList activeCity={city} getActiveCity={onCitySelect}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} aces to stay in {city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"/>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <NearPlacesList offers={offers} setActiveCard={setActiveCard} type={PlacesListType.MAIN_PAGE}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} activeCard={activeCard}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  city: PropTypes.string.isRequired,
  onCitySelect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelect(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.filteredOffers());
  },
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
