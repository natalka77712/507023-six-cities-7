import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {PinSettings} from '../../const';
import useMap from '../../hooks/use-map/use-map';
import cardProp from '../card/card.prop';

const defaultCustomPin = leaflet.icon({
  iconUrl: PinSettings.DEFAULT_IMG,
});

const activeCustomPin = leaflet.icon({
  iconUrl: PinSettings.ACTIVE_IMG,
});

function Map({initialPosition, offers, activeCard}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, initialPosition);

  useEffect(() => {
    const layerGroup = leaflet.layerGroup();

    if (map) {
      offers.forEach(({location: {latitude, longitude}, id}) => {
        const marker = leaflet.marker(
          {
            lat: latitude,
            lng: longitude,
          },
          {
            icon: (id === activeCard.id) ? activeCustomPin : defaultCustomPin,
          },
        );
        layerGroup.addLayer(marker);
      });
      layerGroup.addTo(map);
    }

    return () => {
      if (map) {
        layerGroup.remove();
      }
    };
  }, [map, offers, activeCard]);

  return <div id='map' style={{height: '100%'}} ref={mapRef}/>;
}

Map.propTypes = {
  activeCard: PropTypes.object.isRequired,
  initialPosition: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(
    cardProp,
  ).isRequired,
};

export default Map;
