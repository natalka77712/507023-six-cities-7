import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {PageType, Path} from '../../const';
import Card from '../card/card';
import cardProp from '../card/card.prop';
import {changeCity} from '../../store/action';
import {useDispatch} from 'react-redux';

function FavoritesPlace({favoritesOffers, favoritesCity}) {
  const dispatch = useDispatch();
  const offers = favoritesOffers.filter((offer) => offer.city.name === favoritesCity);

  const handleCityClick = () => {
    dispatch(changeCity(favoritesCity));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={Path.MAIN}
            onClick={handleCityClick}
          >
            <span>{favoritesCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            pageType={PageType.FAVORITE}
          />))}
      </div>
    </li>
  );
}

FavoritesPlace.propTypes = {
  favoritesOffers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  favoritesCity: PropTypes.string.isRequired,
};

export default FavoritesPlace;
