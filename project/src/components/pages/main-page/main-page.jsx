import React, {useState} from 'react';
import Map from '../../map/map';
import {PlacesListType} from '../../../const';
import NearPlacesList from '../../near-places-list/near-places-list';
import CityList from '../../city-list/city-list';
import PlacesSorting from '../../places-sorting/places-sorting';
import {filterOffers, setSorting} from '../../../utils';
import {useSelector} from 'react-redux';
import Header from '../../header/header';

function MainPage () {
  const [activeCard, setActiveCard] = useState({});

  const {activeSort, city} = useSelector((state) => state.OPERATION);
  const {offers} = useSelector((state) => state.DATA);

  const cityOffers = setSorting(filterOffers(city, offers), activeSort);

  const onCardHover = (id) => {
    const currentCard = offers.find((offer) => offer.id === Number(id));
    setActiveCard(currentCard);
  };

  const cityCoords = cityOffers[0].city;

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
                <NearPlacesList offers={cityOffers} onMouseEnter={onCardHover} onMouseLeave={() => setActiveCard({})} type={PlacesListType.MAIN_PAGE}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={cityOffers} activeCard={activeCard} initialPosition={cityCoords} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
