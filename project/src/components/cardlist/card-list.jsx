import React, {useState} from 'react';
import Card from '../card/card';
import cardProp from '../card/card.prop';
import PropTypes from 'prop-types';

function CardList (props) {
  const {offers} = props;

  const [, setCardActive] = useState(offers[0]);

  const handleCardMouseOver = (offer) => {
    setCardActive(offer);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <Card offer={offer} handleCardMouseOver={handleCardMouseOver} key={offer.id} />,
        )
      }
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
};


export default CardList;
