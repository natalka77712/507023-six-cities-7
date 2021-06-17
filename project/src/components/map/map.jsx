import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import cardProp from '../card/card.prop';

import 'leaflet/dist/leaflet.css';
import {PinSettings} from '../../const';

function Map ({offers, activeCard}) {

  const CITY = [52.38333, 4.9];
  const ZOOM = 12;

  const mapRef = useRef();

  const defaultCustomPin = leaflet.icon({
    iconUrl: PinSettings.DEFAULT_IMG,
  });

  const activeCustomPin = leaflet.icon({
    iconUrl: PinSettings.ACTIVE_IMG,
  });

  useEffect(() => {
    mapRef.current = leaflet.map('map', {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(mapRef.current);

    mapRef.current.setView(CITY, ZOOM);

    offers.forEach((offer) => {
      leaflet
        .marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: (offer.id === activeCard) ? activeCustomPin : defaultCustomPin,
          },
        )
        .addTo(mapRef.current)
        .bindPopup(offer.title);
    });

    return () => {
      mapRef.current.remove();
    };
  });

  return (
    <div id='map' style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
  activeCard: PropTypes.number,
};

export default Map;
