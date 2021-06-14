import React, {useState} from 'react';
import Card from '../card/card';
import cardProp from '../card/card.prop';
import PropTypes from 'prop-types';

function CardList (props) {
  const {offers} = props;

  const [, setCardActive] = useState(offers.id);

  const handleCardMouseOver = (id) => {
    setCardActive(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <Card offer={offer} onCardMouseOver={() => handleCardMouseOver(offer.id)} key={offer.id} />,
        )
      }
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  onCardMouseOver: PropTypes.func
};


export default CardList;
