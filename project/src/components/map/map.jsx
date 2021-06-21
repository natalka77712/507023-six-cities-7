import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';

import 'leaflet/dist/leaflet.css';
import {PinSettings} from '../../const';
import useMap from '../../hooks/use-map/use-map';

const CITY = {
  latitude: 52.38333,
  longitude: 4.9,
  zoom: 12,
};

function Map ({offers, activeCard, initialPosition = CITY}) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, initialPosition);

  const defaultCustomPin = leaflet.icon({
    iconUrl: PinSettings.DEFAULT_IMG,
  });

  const activeCustomPin = leaflet.icon({
    iconUrl: PinSettings.ACTIVE_IMG,
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon: (offer.id === activeCard) ? activeCustomPin : defaultCustomPin,
            })
          .addTo(map);
      });
    }
  }, [map, offers, activeCard, activeCustomPin, defaultCustomPin]);

  return (
    <div id='map' style={{height: '100%'}} ref={mapRef}/>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  activeCard: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  initialPosition: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Map;