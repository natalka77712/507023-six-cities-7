import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';

function NearPlacesList ({offers, onMouseEnter, onMouseLeave, pageType}) {
  return (
    <div className={`${pageType} places__list`}>
      {
        offers.map((offer) => <Card key={offer.id} onMouseEnter={() => onMouseEnter(offer.id)} onMouseLeave={onMouseLeave} offer={offer} pageType={pageType}/>,
        )
      }
    </div>
  );
}

NearPlacesList.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  pageType: PropTypes.string,
};

export default React.memo(NearPlacesList);
