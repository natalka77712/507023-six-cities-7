import {CITIES} from '../../const';
import React from 'react';
import PropTypes  from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

function CityList ({city, onUserClick}) {

  const handleCityClick = (place) => {
    onUserClick(place);
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

CityList.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onUserClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getOffers() {
    dispatch(ActionCreator.filteredOffers());
  },
});

export {CityList};
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
