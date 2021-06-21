import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import cardProp from '../../card/card.prop';
import Map from '../../map/map';
import {PlacesListType, Path} from '../../../const';
import {NavLink} from 'react-router-dom';
import NearPlacesList from '../../near-places-list/near-places-list';

function Main ({offers}) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div>
      <div className="page page--gray page--main">
        <Header/>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <li className="locations__item">
                  <NavLink className="locations__item-link tabs__item" to={ Path.MAIN }>
                    <span>Paris</span>
                  </NavLink>
                </li>
                <li className="locations__item">
                  <NavLink className="locations__item-link tabs__item" to={ Path.MAIN }>
                    <span>Cologne</span>
                  </NavLink>
                </li>
                <li className="locations__item">
                  <NavLink className="locations__item-link tabs__item" to={ Path.MAIN }>
                    <span>Brussels</span>
                  </NavLink>
                </li>
                <li className="locations__item">
                  <NavLink className="locations__item-link tabs__item tabs__item--active" to={ Path.MAIN }>
                    <span>Amsterdam</span>
                  </NavLink>
                </li>
                <li className="locations__item">
                  <NavLink className="locations__item-link tabs__item" to={ Path.MAIN }>
                    <span>Hamburg</span>
                  </NavLink>
                </li>
                <li className="locations__item">
                  <NavLink className="locations__item-link tabs__item" to={ Path.MAIN }>
                    <span>Dusseldorf</span>
                  </NavLink>
                </li>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">312 places to stay in Amsterdam</b>
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
};

export default Main;
