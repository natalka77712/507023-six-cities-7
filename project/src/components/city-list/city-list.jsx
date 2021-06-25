import {CITIES} from '../../const';
import React from 'react';
import PropTypes  from 'prop-types';

function CityList ({getActiveCity, activeCity}) {

  const handleCityClick = (city) => {
    getActiveCity(city);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((city) => (
          <li className="locations__item" key={city}>
            <a className={`locations__item-link ${city === activeCity ? 'tabs__item--active' : ''} tabs__item`} href="/some/valid/uri" onClick={(evt) => {evt.preventDefault();
              handleCityClick(city);}}
            >
              <span>{city}</span>
            </a>
          </li>),
        )}
      </ul>
    </section>
  );
}

CityList.propTypes = {
  getActiveCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

export default CityList;
