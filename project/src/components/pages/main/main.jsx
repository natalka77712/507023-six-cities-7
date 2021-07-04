import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Map from '../../map/map';
import {PlacesListType} from '../../../const';
import NearPlacesList from '../../near-places-list/near-places-list';
import CityList from '../../city-list/city-list';
import {connect} from 'react-redux';
import PlacesSorting from '../../places-sorting/places-sorting';
import {filterOffers, setSorting} from '../../../utils';
import {fetchOffers} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';

function Main ({ offers, city, isOffersLoaded, onLoadData}) {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (!isOffersLoaded) {
      onLoadData();
    }
  }, [isOffersLoaded, onLoadData]);

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cityCoords = offers[0].city.location;

  return (
    <div>
      <div className="page page--gray page--main">
        <Header/>

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

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  isOffersLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: setSorting(filterOffers(state.city, state.offers), state.activeSort),
  city: state.city,
  isOffersLoaded: state.isOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
