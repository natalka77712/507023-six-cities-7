import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import cardProp from '../card/card.prop';

import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';

function Map (props) {
  const {offers} = props;
  const CITY = [52.38333, 4.9];
  const ZOOM = 12;

  const customIcon = leaflet.icon({
    iconUrl: './img/pin.svg',
    iconSize: [30, 30],
  });

  const mapRef = useRef();

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
            icon: customIcon,
          },
        )
        .addTo(mapRef.current)
        .bindPopup(offer.title);
    });
  });

  return (
    <div id='map' style={{height: '100%'}} ref={mapRef}></div>
  );

}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
};

export default Map;
