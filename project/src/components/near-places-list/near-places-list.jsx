import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';
import {PlacesListType} from '../../const';
import {connect} from 'react-redux';


function NearPlacesList ({offers, setActiveCard, type}) {
  const isRoomPage = type === PlacesListType.ROOM_PAGE;
  return (
    <div className={`places__list ${isRoomPage ? 'near-places__list' : 'cities__places-list tabs__content'}`}>
      {
        offers.map((offer) => <Card key={offer.id} setActiveCard={setActiveCard} offer={offer} isRoomPage={isRoomPage}/>,
        )
      }
    </div>
  );
}

NearPlacesList.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  setActiveCard: PropTypes.func.isRequired,
  type: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});


export {NearPlacesList};

export default connect(mapStateToProps, null)(NearPlacesList);
