import React from 'react';
import Card from '../card/card';
import PropTypes from 'prop-types';
import {PlacesListType} from '../../const';


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
  offers: PropTypes.array.isRequired,
  setActiveCard: PropTypes.func.isRequired,
  type: PropTypes.string,
};


export default NearPlacesList;
