import {CITIES} from '../../const';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeCity} from '../../store/action';

function CityList () {

  const {city} = useSelector((state) => state.OPERATION);
  const dispatch = useDispatch();

  const handleCityClick = (place) => {
    dispatch(changeCity(place));
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((cityName) => (
          <li className="locations__item" key={cityName}>
            <a className={`locations__item-link ${cityName === city ? 'tabs__item--active' : ''} tabs__item`} href="/some/valid/uri" onClick={(evt) => {evt.preventDefault();
              handleCityClick(cityName);}}
            >
              <span>{cityName}</span>
            </a>
          </li>),
        )}
      </ul>
    </section>
  );
}

export default React.memo(CityList);
