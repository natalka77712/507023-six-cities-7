import React from 'react';
import Card from '../card/card';
import cardProp from '../card/card.prop';
import PropTypes from 'prop-types';

function CardList ({offers, setActiveCard}) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <Card  key={offer.id} offer={offer} setActiveCard={setActiveCard} />,
        )
      }
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  setActiveCard: PropTypes.func.isRequired,
};


export default CardList;
